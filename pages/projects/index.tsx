import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Projects } from "../../components/Containers/Project/Projects";
import { SEO } from "../../components/SEO/SEO";
import { IProject } from "../../types/IProject";
import { getMarkdownFrontMatter } from "../../utils/files";
import { getTags } from "../../utils/tags";

interface ProjectsPageProps {
  projects: IProject[];
  tags: string[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects, tags }) => {
  return (
    <>
      <Head>
        <title>Projects | Perry Smith-Moss</title>
        <SEO />
      </Head>
      <Projects projects={projects} tags={tags} />
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const content = await getMarkdownFrontMatter("content/projects");

  // Order projects by ID
  const projects = content.sort((x, y) => parseInt(x.id) - parseInt(y.id));

  // Gather all tags (removing duplicates)
  const tags = getTags(projects as IProject[]);

  return {
    props: {
      projects,
      tags,
    },
  };
};
