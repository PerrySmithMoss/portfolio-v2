import { promises as fsPromise } from "fs";
import matter from "gray-matter";
import path from "path";

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
export async function getMarkdownFrontMatter(pathOfFiles: string): Promise<
  {
    data: {
      [key: string]: any;
    };
  }[]
> {
  const files = await getFiles(pathOfFiles);

  let parsedMarkdownFiles;
  try {
    parsedMarkdownFiles = Promise.all(
      files.map(async (file: string) => {
        const markdown = await readFile(pathOfFiles, file);
        const { data } = matter(markdown);

        return {
          data,
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
