import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Containers/Home/Hero/Hero";
import { FeaturedProjects } from "../components/Containers/Home/FeaturedProjects/FeaturedProjects";
import { SEO } from "../components/SEO/SEO";
import { ISnippet } from "../types/ISnippet";
import { FeaturedSnippets } from "../components/Containers/Home/FeaturedSnippets/FeaturedSnippets";
import { getMarkdownFrontMatter } from "../utils/files";
import { IProject } from "../types/IProject";
import { IPost } from "../types/IBlog";
import { FeaturedBlogPosts } from "../components/Containers/Home/FeaturedBlogPosts/FeaturedBlogPosts";
import { GetInTouch } from "../components/Containers/Home/GetInTouch/GetInTouch";

interface HomePageProps {
  featuredProjects: IProject[];
  featuredSnippets: ISnippet[];
  featuredBlogPosts: IPost[];
}

const Home: NextPage<HomePageProps> = ({
  featuredProjects,
  featuredSnippets,
  featuredBlogPosts,
}) => {
  return (
    <>
      <Head>
        <title>Perry Smith-Moss</title>
        <SEO />
      </Head>
      <Hero />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <FeaturedBlogPosts featuredBlogPosts={featuredBlogPosts} />
      <FeaturedSnippets featuredSnippets={featuredSnippets} />
      <GetInTouch />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredSnippets = await getMarkdownFrontMatter(
    "content/home/snippets"
  );

  const featuredProjects = await getMarkdownFrontMatter(
    "content/home/projects"
  );

  const featuredBlogPosts = await getMarkdownFrontMatter("content/home/blog");

  return {
    props: {
      featuredSnippets,
      featuredProjects,
      featuredBlogPosts,
    },
  };
};