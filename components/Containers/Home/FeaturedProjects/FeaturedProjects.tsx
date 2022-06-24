import React from "react";
import styles from "./FeaturedProjects.module.scss";
import { IProject } from "../../../../types/IProject";
import { ProjectCard } from "./ProjectCard";
import { Button } from "../../../Button/Button/Button";

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
              <ProjectCard key={project.id} project={project} />
            ))}
        </ul>
      </div>
      <div className={styles.loadMoreButton}>
        <Button
          text="See more"
          variant="outline"
          colour="#00FFFF"
          // backgroundColour="rgb(40, 45, 65)"
        />
      </div>
    </section>
  );
};
