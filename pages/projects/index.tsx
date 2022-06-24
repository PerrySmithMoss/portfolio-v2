import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Projects } from "../../components/Containers/Project/Projects/Projects";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SEO } from "../../components/SEO/SEO";
import { useGlobalUIContext } from "../../context/GlobalUI.context";
import styles from "../../styles/Home.module.scss";
import { IProject } from "../../types/IProject";
import { getMarkdownFrontMatter } from "../../utils/files";
import { getTags } from "../../utils/tags";

interface ProjectsPageProps {
  projects: IProject[];
  tags: string[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects, tags }) => {
  const { isMobileMenuDrawerOpen } = useGlobalUIContext();
  return (
    <div>
      <Head>
        <title>Projects | Perry Smith-Moss</title>
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
          <Projects projects={projects} tags={tags} />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getMarkdownFrontMatter("content/projects");

  // Gather all tags (removing duplicates)
  const tags = getTags(projects as IProject[]);

  return {
    props: {
      projects,
      tags,
    },
  };
};
