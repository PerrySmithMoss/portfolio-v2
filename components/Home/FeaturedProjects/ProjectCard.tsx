import Image from "next/image";
import React from "react";
import { IFeaturedProject } from "../../../types/IProject";
import { Badge } from "../../Badge/Badge";
import { Button } from "../../Button/Button/Button";
import { SeeAll } from "../../Button/SeeAll/SeeAll";
import styles from "./FeaturedProjects.module.scss";

interface ProjectCardProps {
  project: IFeaturedProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.cardWrapper}>
      <div>
        <Image
          alt={project.data.title}
          src={project.data.image}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4>{project.data.title}</h4>

          <Badge text={project.data.platform} />
        </div>
        <p>{project.data.description}</p>
        <div className={styles.buttonsContainer}>
          <Button
            text="Read more"
            colour="white"
            backgroundColour="rgb(40, 45, 65)"
            variant="filled"
          />
          {project.data.urlLink != null && (
            <SeeAll
              padding="0.5rem 0rem"
              colour="#00FFFF"
              buttonText="Visit site"
            />
          )}
        </div>
      </div>
    </article>
  );
};
