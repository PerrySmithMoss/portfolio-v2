import React from "react";
import { IFeaturedProject } from "../../../../types/IProject";
import styles from "./FeaturedProjects.module.scss";
import Image from "next/image";
import { Badge } from "../../../Badge/Badge";
import { Button } from "../../../Button/Button/Button";
import {
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiRedis,
  SiApollographql,
  SiMysql,
} from "react-icons/si";

interface ProjectCardV2Props {
  project: IFeaturedProject;
}

export const ProjectCardV2: React.FC<ProjectCardV2Props> = ({ project }) => {
  return (
    <li className={styles.projectGrid}>
      <div className={styles.columnOne}>
        <Image
          alt={project.data.title}
          src={project.data.image}
          width="100%"
          height="70%"
          layout="responsive"
          objectFit="fill"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.badgeContainer}>
            <Badge
              colour="rgb(34, 139, 230)"
              backgroundColour="#0c2231"
              text={project.data.platform}
              size="md"
            />
          </div>
          <h4>{project.data.title}</h4>
          <div className={styles.cardDescription}>
          <p>{project.data.description}</p>
          </div>
          <div className={styles.techIcons}>
            <SiNextdotjs color="fff" size={28} />
            <SiGraphql color="e535ab" size={28} />
            <SiNodedotjs color="3C873A" size={28} />
            <SiMysql color="00758F" size={32} />
            <SiRedis color="#D82C20" size={28} />
          </div>
        </div>
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
    </li>
  );
};
