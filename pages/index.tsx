import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Hero } from "../components/Containers/Home/Hero/Hero";
import { FeaturedProjects } from "../components/Containers/Home/FeaturedProjects/FeaturedProjects";
import { Loader } from "../components/Loader/Loader";
import { Navbar } from "../components/Navbar/Navbar";
import { SEO } from "../components/SEO/SEO";
import styles from "../styles/Home.module.scss";
import { ISnippet } from "../types/ISnippet";
import { FeaturedSnippets } from "../components/Containers/Home/FeaturedSnippets/FeaturedSnippets";
import { getMarkdownFrontMatter } from "../utils/files";
import { IProject } from "../types/IProject";
import { IPost } from "../types/IBlog";
import { FeaturedBlogPosts } from "../components/Containers/Home/FeaturedBlogPosts/FeaturedBlogPosts";
import { GetInTouch } from "../components/Containers/Home/GetInTouch/GetInTouch";
import { Footer } from "../components/Footer/Footer";
import { useGlobalUIContext } from "../context/GlobalUI.context";

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
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const [isMouted, setIsMouted] = useState(isHome);
  const { isMobileMenuDrawerOpen, setIsLoaded, isLoaded } =
    useGlobalUIContext();

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timerFunc);
  }, []);

  useEffect(() => {
    let timerFunc2 = setTimeout(() => {
      setIsMouted(false);
      setIsLoaded(true);
    }, 1600);

    return () => clearTimeout(timerFunc2);
  }, []);

  if (isLoaded) {
    return (
      <>
        <Head>
          <title>Perry Smith-Moss</title>
          <SEO />
        </Head>
        <div className={styles.mainContainer}>
          <Navbar />
          <main
            className={
              isMobileMenuDrawerOpen
                ? `${styles.mainWrapperBlur} ${styles.mainWrapper}`
                : styles.mainWrapper
            }
          >
            <Hero />
            <FeaturedProjects featuredProjects={featuredProjects} />
            <FeaturedBlogPosts featuredBlogPosts={featuredBlogPosts} />
            <FeaturedSnippets featuredSnippets={featuredSnippets} />
            <GetInTouch />
            <Footer />
          </main>
        </div>
      </>
    );
  } else
    return (
      <div>
        <Head>
          <title>Perry Smith-Moss</title>
          <SEO />
        </Head>
        {isLoading && isHome ? (
          <Loader />
        ) : (
          <div className={styles.easytransitions}>
            <div className={styles.easytransitions_transition}>
              <div
                className={`transitionDiv easytransitions__TransitionPart7 split_vertical`}
              ></div>
              <div
                className={`transitionDiv easytransitions__TransitionPart8 split_vertical`}
              ></div>
            </div>
          </div>
        )}
      </div>
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
