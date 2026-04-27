import { promises as fsPromise } from "fs";
import matter from "gray-matter";
import path from "path";

import { IPost } from "../types/IBlog";
import { IHeading, IMedia } from "../types/IMedia";
import { IProject } from "../types/IProject";
import { ISnippet } from "../types/ISnippet";
import { readingTime } from "./words";

import { bundleMDX } from "mdx-bundler";
import mdxPrism from "mdx-prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { slugify } from "./slugify";

/**
 * A function to asynchronously return file names
 * @param {string} pathOfFiles - The path of where the files are stored
 * @returns {string[]} An array of file strings
 */
export async function getFiles(pathOfFiles: string): Promise<string[]> {
  try {
    const fullPath = path.join(process.cwd(), pathOfFiles);
    const files = await fsPromise.readdir(fullPath);
    return files;
  } catch (e) {
    console.error("Error reading directory:", e);
    return [];
  }
}

/**
 * A function to asynchronously return the entire contents of a file
 * @param {string} pathOfFile - The path of where the files are stored
 * @param {string} file - The name of the file which you want to read
 * @returns {string} A string of the files content
 */
export async function readFile(pathOfFile: string, file: string): Promise<string> {
  const fullPath = path.join(process.cwd(), pathOfFile, file);
  return fsPromise.readFile(fullPath, "utf8");
}

/**
 * A function to asynchronously return the front matter from markdown file(s)
 * @param {string} pathOfFiles - The path of where the files are stored
 * @returns {data[]} An array of data objects which contain the front matter of a markdown file
 */
export async function getMarkdownFrontMatter(pathOfFiles: string): Promise<IMedia[]> {
  const files = await getFiles(pathOfFiles);

  let parsedMarkdownFiles;
  try {
    parsedMarkdownFiles = Promise.all(
      files.map(async (file: string) => {
        const markdown = await readFile(pathOfFiles, file);
        const { data } = matter(markdown);

        return {
          ...(data as ISnippet | IPost | IProject),
        };
      }),
    );
  } catch (e) {
    console.log("Error while trying to parse files: ", e);
  }

  if (parsedMarkdownFiles === undefined) {
    console.log("markdown is undefined");
    return [];
  } else {
    return await parsedMarkdownFiles;
  }
}

/**
 * A function to asynchronously return a file with its front-matter & markdown
 * @param {string} pathOfFile - The path of where the files are stored
 * @param {string} slug - The slug of the file
 * @returns {mdxSource, frontMatter} An object which contains the markdown and front-matter
 */
export async function getFileBySlug(
  pathOfFile: string,
  slug: string,
): Promise<{
  mdxSource: string;
  frontMatter: {
    wordCount: number;
    readingTime: number;
  };
  headings: IHeading[];
}> {
  const source = await readFile(pathOfFile, slug + ".md");

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  // Esbuild has to be manually told
  // where to be pointed
  // because Next JS breaks stuff
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe",
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild",
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: path.join(process.cwd(), pathOfFile),
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              class: "heading-hash_anchor",
            },
          },
        ],
        mdxPrism,
      ];
      return options;
    },
    esbuildOptions(options) {
      options.minify = false;
      options.target = ["es2022", "chrome91", "firefox90", "safari15", "edge91"];
      return options;
    },
  });

  const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g;

  const headings = Array.from(source.matchAll(regXHeader)).map(
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    ({ groups: { flag, content } }: { [key: string]: any }) => ({
      heading: `h${flag.length}`,
      content,
      indent: flag.length,
      slug: slugify(content),
    }),
  );

  return {
    mdxSource: code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      ...frontmatter,
    },
    headings,
  };
}

/**
 * A function to asynchronously return recommendations
 * @param {string} pathOfFile - The path of where the files are stored
 * @param {string} slug - The slug of the file
 * @returns {IMedia} An array of recommendation objects which contain the front-matter
 */
export async function getRecommendations(
  pathOfFile: string,
  slug: string,
): Promise<(IMedia | IMedia[])[]> {
  const files = await getMarkdownFrontMatter(pathOfFile);

  const currentFile = files.find((file: IMedia) => file.slug === slug);

  const otherFiles = files.filter((file: IMedia) => file.slug !== slug);

  const similarRecommendations = otherFiles.filter((file: IMedia) =>
    file.tags.some((tag: string) => currentFile!.tags.includes(tag)),
  );

  const recommendations =
    similarRecommendations.length >= 3
      ? similarRecommendations
      : similarRecommendations.concat(
          otherFiles.filter(
            (file: any) =>
              !similarRecommendations.some(
                (recommendation: IMedia) => (recommendation.slug = file.slug),
              ),
          ),
        );

  return recommendations.slice(0, 3);
}
