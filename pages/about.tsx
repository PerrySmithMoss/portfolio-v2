import type { NextPage } from "next";
import { SEO } from "../components/SEO/SEO";
import { AboutMe } from "../components/Containers/About/AboutMe/AboutMe";
import { MySkills } from "../components/Containers/About/MySkills/MySkills";
import { Education } from "../components/Containers/About/Education/Education";

interface AboutProps {}

const About: NextPage<AboutProps> = ({}) => {
  return (
    <>
      <SEO
        metaTitle="About | Perry Smith-Moss"
        metaDescription="I’m Perry, a software engineer building Vordian. Read about my work at Meadow Vale Foods and WhoCanFixMyCar, and the projects I’m building now."
        canonicalLink="https://perrysmithmoss.com/about"
        ogUrl="https://perrysmithmoss.com/about"
      />
      <AboutMe />
      <MySkills />
      <Education />
    </>
  );
};

export default About;
