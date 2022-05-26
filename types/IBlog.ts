export interface IFeaturedBlogPost {
  data: IData;
}

interface IData {
  id: string;
  title: string;
  readMoreLink: string;
  image: string;
  description: string;
  featuredPost: boolean;
  tech: string[];
  tag: string;
}
