import { promises as fsPromise } from "fs";
import matter from "gray-matter";
import path from "path";

import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import remarkAutolinkHeadings from "remark-autolink-headings";
import remarkSlug from "remark-slug";
import remarkCodeTitles from "remark-code-titles";
import { ISnippet } from "../types/ISnippet";
import { IPost } from "../types/IBlog";
import { IProject } from "../types/IProject";
import { IHeading, IMedia } from "../types/IMedia";
import { readingTime } from "./words";

/**
 * A function to asynchronously return file names
 * @param {string} pathOfFiles - The path of where the files are stored
 * @returns {string[]} An array of file strings
 */
export async function getFiles(pathOfFiles: string): Promise<string[]> {
  let files;
  try {
    files = await fsPromise.readdir(path.join(pathOfFiles));
  } catch (e) {
    console.log("Error while trying to read files: ", e);
  }

  if (files === undefined) {
    console.log("Files undefined");
    return [];
  } else {
    // console.log("Files:", files);
    return files;
  }
}

/**
 * A function to asynchronously return the entire contents of a file
 * @param {string} pathOfFile - The path of where the files are stored
 * @param {string} file - The name of the file which you want to read
 * @returns {string} A string of the files content
 */
export async function readFile(
  pathOfFile: string,
  file: string,
  encoding = "utf-8" as BufferEncoding
): Promise<string> {
  if (!pathOfFile) {
    throw new Error("A file path is required...");
  }

  return fsPromise.readFile(path.join(pathOfFile, file), encoding);
}

/**
 * A function to asynchronously return the front matter from markdown file(s)
 * @param {string} pathOfFiles - The path of where the files are stored
 * @returns {data[]} An array of data objects which contain the front matter of a markdown file
 */
export async function getMarkdownFrontMatter(
  pathOfFiles: string
): Promise<IMedia[]> {
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
      })
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

type Groups = {
  [key: string]: any;
};

/**
 * A function to asynchronously return a file with its front-matter & markdown
 * @param {string} pathOfFile - The path of where the files are stored
 * @param {string} slug - The slug of the file
 * @returns {mdxSource, frontMatter} An object which contains the markdown and front-matter
 */
export async function getFileBySlug(
  pathOfFile: string,
  slug: string
): Promise<{
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: {
    wordCount: number;
    readingTime: number;
  };
  headings: IHeading[];
}> {
  const source = await readFile(pathOfFile, slug + ".md");

  const { data, content } = matter(source);

  const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g;

  const headings = Array.from(content.matchAll(regXHeader)).map(
    ({ groups: { flag, content } }: { [key: string]: any }) => ({
      heading: `h${flag.length}`,
      content,
      indent: flag.length
    })
  );

  console.log(headings)

  const mdxSource = await serialize(content, {
    //  components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [remarkAutolinkHeadings, remarkSlug, remarkCodeTitles],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      ...data,
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
  slug: string
): Promise<(IMedia | IMedia[])[]> {
  const files = await getMarkdownFrontMatter(pathOfFile);

  const currentFile = files.find((file: IMedia) => file.slug === slug);

  const otherFiles = files.filter((file: IMedia) => file.slug !== slug);

  const similarRecommendations = otherFiles.filter((file: IMedia) =>
    file.tags.some((tag: string) => currentFile!.tags.includes(tag))
  );

  const recommendations =
    similarRecommendations.length >= 3
      ? similarRecommendations
      : [
          ...similarRecommendations,
          otherFiles.filter(
            (file: any) =>
              !similarRecommendations.some(
                (recommendation: any) => (recommendation.slug = file.slug)
              )
          ),
        ];

  return recommendations.slice(0, 3);
}
