import { IFeaturedSnippet } from "../types/ISnippet";

/**
 * A function which returns the tags from snippet data (removing duplicates)
 * @param {IFeaturedSnippet[]} snippets - snippet data
 * @returns {string[]} An array of tags
 */
export function getTags(snippets: IFeaturedSnippet[]) {
  const tags = snippets.reduce(
    (accTags: string[], snippet: IFeaturedSnippet) => [
      ...accTags,
      ...snippet.data.tags,
    ],
    []
  );

  //   Remove duplicates
  const uniqueChars = Array.from(new Set(tags));

  return uniqueChars;
}
