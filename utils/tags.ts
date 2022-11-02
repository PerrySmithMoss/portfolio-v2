import { IMedia } from "../types/IMedia";

/**
 * A function which returns the tags from snippet data (removing duplicates)
 * @param {ISnippet[]} snippets - snippet data
 * @returns {string[]} An array of tags
 */
export function getTags(snippets: IMedia[]) {
  const tags = snippets.reduce(
    (accTags: string[], snippet: IMedia) => [
      ...accTags,
      ...snippet.tags,
    ],
    []
  );

  // Remove duplicates
  const uniqueChars = Array.from(new Set(tags));

  return uniqueChars;
}
