import type { NextPage } from "next";
import Head from "next/head";
import { SEO } from "../components/SEO/SEO";
import { AboutMe } from "../components/Containers/About/AboutMe/AboutMe";
import { MySkills } from "../components/Containers/About/MySkills/MySkills";
import { Education } from "../components/Containers/About/Education/Education";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  return (
    <>
      <Head>
        <title>About Me | Perry Smith-Moss</title>
        <SEO />
      </Head>
      <AboutMe />
      <MySkills />
      <Education />
    </>
  );
};

export default About;
