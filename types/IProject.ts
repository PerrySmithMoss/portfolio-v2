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
  mobileMockupImage?: string;
  mockupAlt?: string;
  imageQuality?: number;
  desktopPreview?: boolean;
  coverImage: string;
  coverImageFit?: "cover" | "contain";
  description: string;
  tech: string[];
  tags: string[]
  featuredTags?: string[];
  platform: string;
}
