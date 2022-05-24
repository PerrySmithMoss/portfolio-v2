import React from "react";
import { SeeAll } from "../../Button/SeeAll/SeeAll";
import styles from "./FeaturedProjects.module.scss";
import { IFeaturedProject } from "../../../types/IProject";
import { ProjectCard } from "./ProjectCard";

interface FeaturedProjectsProps {
  featuredProjects: IFeaturedProject[]
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({featuredProjects}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h2>Featured Projects</h2>
        </div>
        <div className={styles.arrowContainer}>
          <SeeAll colour="#00FFFF" buttonText="View more" />
        </div>
      </div>
      <div className={styles.projectsContainer}>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project: IFeaturedProject) => (
              <ProjectCard key={project.data.id} project={project}/>
            ))}
          </div>
      </div>
    </section>
  );
};
