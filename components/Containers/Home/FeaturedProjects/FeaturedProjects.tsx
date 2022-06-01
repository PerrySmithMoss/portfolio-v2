import React from "react";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import styles from "./FeaturedProjects.module.scss";
import { IFeaturedProject } from "../../../../types/IProject";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardV2 } from "./ProjectCardV2";

interface FeaturedProjectsProps {
  featuredProjects: IFeaturedProject[];
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
        {/* <div className={styles.arrowContainer}>
          <SeeAll colour="#00FFFF" buttonText="View more" />
        </div> */}
      </div>
      <div className={styles.projectsContainer}>
        {/* <ul className={styles.projectsGrid}>
            {featuredProjects.map((project: IFeaturedProject) => (
              <ProjectCard key={project.data.id} project={project}/>
            ))}
          </ul> */}

        <ul className={styles.projectsWrapper}>
          {featuredProjects
            .sort(
              (a: IFeaturedProject, b: IFeaturedProject) =>
                parseInt(a.data.id) - parseInt(b.data.id)
            )
            .map((project: IFeaturedProject) => (
              <ProjectCardV2 key={project.data.id} project={project} />
            ))}
        </ul>
      </div>
    </section>
  );
};
