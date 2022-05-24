export interface IFeaturedProject {
  data: IData
}

interface ILink {
  readMore: string;
  github: string;
  url: string | null;
}

interface IData {
  id: string;
  title: string;
  links: ILink;
  image: string;
  description: string;
  tech: string[];
  platform: string;
}

