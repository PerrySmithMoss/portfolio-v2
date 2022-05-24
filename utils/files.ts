import { promises as fsPromise } from "fs";
import matter from "gray-matter";
import path from "path";

/**
 * @param {pathOfFiles string} pathOfFiles name - parameter description
 * function to  calculate the area of a rectangle
 */
// A function which takes the location of files as a parameter
// and returns those files as strings
export async function getFiles(pathOfFiles: string) {
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

export async function readFile(filePath: string, file: string) {
  if (!filePath) {
    throw new Error("A file path is required...");
  }

  return fsPromise.readFile(path.join(filePath, file), "utf-8");
}

export async function getMarkdownFromFilePath(filesPath: string) {
  const files = await getFiles(filesPath);

  let parsedMarkdownFiles;
  try {
    parsedMarkdownFiles = Promise.all(
      files.map(async (file: string) => {
        const markdown = await readFile(filesPath, file);
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
