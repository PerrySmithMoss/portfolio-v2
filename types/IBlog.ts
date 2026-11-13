export interface IPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  datePublished: string;
  datePublishedISO: string;
  featuredPost: boolean;
  tech: string[];
  tags: string[];
  readingTime: number;
  wordCount: number;
}
