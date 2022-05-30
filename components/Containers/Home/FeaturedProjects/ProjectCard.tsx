import Image from "next/image";
import React from "react";
import { IFeaturedProject } from "../../../../types/IProject";
import { Badge } from "../../../Badge/Badge";
import { Button } from "../../../Button/Button/Button";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
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

          <Badge
            colour="rgb(34, 139, 230)"
            backgroundColour="#0c2231"
            text={project.data.platform}
            size="sm"
          />
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
