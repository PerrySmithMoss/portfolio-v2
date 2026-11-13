import type { GetStaticProps, NextPage } from "next";
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
      <SEO
        metaTitle="Projects | Perry Smith-Moss"
        metaDescription="Explore Vordian and other projects I’ve built, from fitness tools and fleet tracking to messaging apps."
        canonicalLink="https://perrysmithmoss.com/projects"
        ogUrl="https://perrysmithmoss.com/projects"
      />
      <Projects projects={projects} tags={tags} />
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const content = await getMarkdownFrontMatter("projects");

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
