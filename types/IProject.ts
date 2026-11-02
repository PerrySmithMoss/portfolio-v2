export interface IProject {
  id: string;
  title: string;
  readMoreLink: string;
  slug: string
  githubLink: string;
  urlLink: string;
  brandColor: string
  image: string;
  logo: string;
  mockupImage: string;
  desktopPreview?: boolean;
  coverImage: string;
  description: string;
  tech: string[];
  tags: string[]
  platform: string;
}
