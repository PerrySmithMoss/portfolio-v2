import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { SEO } from "../components/SEO/SEO";
import styles from "../styles/Home.module.scss";
import { AboutMe } from "../components/Containers/About/AboutMe/AboutMe";
import { MySkills } from "../components/Containers/About/MySkills/MySkills";
import { Education } from "../components/Containers/About/Education/Education";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  return (
    <div>
      <Head>
        <title>Perry Smith-Moss</title>
        <SEO />
      </Head>

      <div className={styles.mainContainer}>
        <Navbar />
        <main className={styles.mainWrapper}>
          <AboutMe />
          <MySkills />
          <Education />
        </main>
      </div>
    </div>
  );
};

export default About;
