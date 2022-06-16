import React from "react";
import styles from "./FeaturedProjects.module.scss";
import { IProject } from "../../../../types/IProject";
import { ProjectCardV2 } from "./ProjectCardV2";

interface FeaturedProjectsProps {
  featuredProjects: IProject[];
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  featuredProjects,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerBorderLeft}>
          <h2>Featured Projects</h2>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <ul className={styles.projectsWrapper}>
          {featuredProjects
            .sort((a: IProject, b: IProject) => parseInt(a.id) - parseInt(b.id))
            .map((project: IProject) => (
              <ProjectCardV2 key={project.id} project={project} />
            ))}
        </ul>
      </div>
    </section>
  );
};
