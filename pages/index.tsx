import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Containers/Home/Hero/Hero";
import { FeaturedProjects } from "../components/Containers/Home/FeaturedProjects/FeaturedProjects";
import { SEO } from "../components/SEO/SEO";
import { getMarkdownFrontMatter } from "../utils/files";
import { IProject } from "../types/IProject";
import { GetInTouch } from "../components/Containers/Home/GetInTouch/GetInTouch";

interface HomePageProps {
  featuredProjects: IProject[];
}

const Home: NextPage<HomePageProps> = ({ featuredProjects }) => {
  return (
    <>
      <Head>
        <title>Perry Smith-Moss</title>
        <SEO />
      </Head>
      <Hero />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <GetInTouch />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredProjects = await getMarkdownFrontMatter(
    "content/home/projects"
  );

  return {
    props: {
      featuredProjects,
    },
  };
};
