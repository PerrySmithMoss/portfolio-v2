export interface IFeaturedSnippet {
  data: IData;
}

interface IData {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  slug: string;
  tags: string[];
  tech: string[];
}
