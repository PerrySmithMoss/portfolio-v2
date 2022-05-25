export interface IFeaturedProject {
  data: IData;
}

interface IData {
  id: string;
  title: string;
  readMoreLink: string;
  githubLink: string;
  urlLink: string;
  image: string;
  description: string;
  tech: string[];
  platform: string;
}
