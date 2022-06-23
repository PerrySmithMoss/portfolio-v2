import Link from "next/link";
import React from "react";
import { IProject } from "../../../../types/IProject";
import { Badge } from "../../../Badge/Badge";
import styles from "./FeaturedProjects.module.scss";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li
      style={{ backgroundColor: project.brandColor }}
      className={styles.cardWrapper}
    >
      <Link href={project.readMoreLink}>
        <div className={styles.cardInner}>
          <div className={styles.columnOne}>
            <div className={styles.columnText}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.badgeContainer}>
                {project.tech.map((tech: string, index) => (
                  <Badge
                    key={index}
                    text={tech}
                    colour="#fff"
                    size="lg"
                    backgroundColour="#7B7B7B"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.columnTwo}>
            <div className={styles.imageContainer}>
              <img
                src={project.mockupImage}
                alt={`${project.title} mockup image`}
                className={styles.mockupImage}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
