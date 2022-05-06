import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Hero } from "../components/Hero/Hero";
import { Loader } from "../components/Loader/Loader";
import { Navbar } from "../components/Navbar/Navbar";
import { SEO } from "../components/SEO/SEO";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timerFunc);
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
        // Convert this to a component
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
            <Navbar />
            <main className={styles.mainWrapper}>
              <Hero />
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
