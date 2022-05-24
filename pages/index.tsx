import fs from "fs";
import path from "path";

import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { FeaturedProjects } from "../components/Home/FeaturedProjects/FeaturedProjects";
import { Loader } from "../components/Loader/Loader";
import { Navbar } from "../components/Navbar/Navbar";
import { SEO } from "../components/SEO/SEO";
import styles from "../styles/Home.module.scss";
import matter from "gray-matter";
import { IFeaturedSnippet } from "../types/ISnippet";
import { FeaturedSnippets } from "../components/Home/FeaturedSnippets/FeaturedSnippets";
import { getMarkdownFromFilePath } from "../utils/files";
import { IFeaturedProject } from "../types/IProject";

interface HomePageProps {
  featuredProjects: IFeaturedProject[];
  featuredSnippets: IFeaturedSnippet[];
}

const Home: NextPage<HomePageProps> = ({
  featuredProjects,
  featuredSnippets,
}) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  const [isMouted, setIsMouted] = useState(isHome);

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timerFunc);
  }, []);

  useEffect(() => {
    let timerFunc2 = setTimeout(() => {
      setIsMouted(false);
    }, 1600);

    return () => clearTimeout(timerFunc2);
  }, []);

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
          <div
            className={`active_slide ${styles.transitionSection} slideSection`}
            data-transition={`split_vertical`}
          >
            {isMouted && isHome ? (
              <Loader />
            ) : (
              <div className={styles.mainContainer}>
                <Navbar />
                <main className={styles.mainWrapper}>
                  <Hero />
                  <FeaturedProjects featuredProjects={featuredProjects} />
                  <FeaturedSnippets featuredSnippets={featuredSnippets} />
                </main>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredSnippets = await getMarkdownFromFilePath("content/home/snippets");
  const featuredProjects = await getMarkdownFromFilePath("content/home/projects")

  return {
    props: {
      featuredSnippets,
      featuredProjects,
    },
  };
};
