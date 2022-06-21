import Image from "next/image";
import React from "react";
import { IProject } from "../../../../types/IProject";
import { Badge } from "../../../Badge/Badge";
import { Button } from "../../../Button/Button/Button";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import styles from "./FeaturedProjects.module.scss";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.cardLeft}>
        <Image
          alt={project.title}
          src={project.image}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="fill"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4>{project.title}</h4>

          <Badge
            colour="rgb(34, 139, 230)"
            backgroundColour="#0c2231"
            text={project.platform}
            size="sm"
          />
        </div>
        <p>{project.description}</p>
        <div className={styles.buttonsContainer}>
          <Button
            text="Read more"
            colour="white"
            backgroundColour="rgb(40, 45, 65)"
            variant="filled"
          />
          {project.urlLink != null && (
            //   <a
            //   target="_blank"
            //   rel="noreferrer"
            //   href="https://meadowvalefoods.co.uk/"
            //   className={styles.cardLink}
            // >
            //   Visit Site
            // </a>
            <Button
              text="Preview"
              colour="#000036"
              backgroundColour="#00FFFF"
              variant="filled"
              type="secondary"
            />
          )}
        </div>
      </div>
    </article>
  );
};
