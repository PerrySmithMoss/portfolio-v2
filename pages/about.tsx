import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { SEO } from "../components/SEO/SEO";
import styles from "../styles/Home.module.scss";
import { AboutMe } from "../components/Containers/About/AboutMe/AboutMe";
import { MySkills } from "../components/Containers/About/MySkills/MySkills";
import { Education } from "../components/Containers/About/Education/Education";
import { Footer } from "../components/Footer/Footer";
import { useGlobalUIContext } from "../context/GlobalUI.context";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  const { isMobileMenuDrawerOpen } = useGlobalUIContext();

  return (
    <div>
      <Head>
        <title>About Me | Perry Smith-Moss</title>
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
          <AboutMe />
          <MySkills />
          <Education />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default About;
