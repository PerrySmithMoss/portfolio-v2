import { IPost } from "./IBlog";
import { IProject } from "./IProject";
import { ISnippet } from "./ISnippet";

export type IMedia = ISnippet | IPost | IProject;

export interface IHeading {
  heading: string;
  content: any;
  indent: number
}
