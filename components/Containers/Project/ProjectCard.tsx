import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IProject } from "../../../types/IProject";
import { Badge } from "../../Badge/Badge";
import { Button } from "../../Button/Button/Button";
import styles from "./Projects.module.scss";
import { ProjectDevices } from "../../ProjectDevices/ProjectDevices";

const EXTERNAL_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="#b1bdc5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, coverImage, tags, description, urlLink, githubLink } = project;

  return (
    <motion.li
      className={styles.cardWrapper}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.cardBody}>
        <div
          className={styles.imageContainer}
          style={project.mobileMockupImage ? { backgroundColor: project.brandColor } : undefined}
        >
          {project.mobileMockupImage ? (
            <ProjectDevices
              title={title}
              desktopImage={project.mockupImage}
              mobileImage={project.mobileMockupImage}
              compact
            />
          ) : <Image
            className={styles.cardImage}
            src={coverImage}
            quality={project.imageQuality}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 625px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority
            style={{ objectFit: project.coverImageFit ?? "cover" }}
          />}
        </div>

        <div className={styles.cardHeader}>
          <h4>{title}</h4>
        </div>

        <div className={styles.badgeContainer}>
          {(project.featuredTags ?? tags).slice(0, 4).map((tag, index) => (
            <Badge
              key={index}
              text={tag}
              size="sm"
              backgroundColour="rgb(12, 34, 49)"
              colour="rgb(34, 139, 230)"
            />
          ))}
        </div>

        <p>{description}</p>

        <div className={styles.buttonContainer}>
          {urlLink && (
            <Button
              text="Preview"
              link={urlLink}
              external
              variant="filled"
              backgroundColour="rgb(40, 45, 65)"
              colour="white"
              size="sm"
            >
              {EXTERNAL_ICON}
            </Button>
          )}

          {githubLink && (
            <Button
              link={githubLink}
              external
              text="Github"
              colour="white"
              variant="none"
              size="sm"
              type="accent"
            >
              {GITHUB_ICON}
            </Button>
          )}
        </div>
      </div>
    </motion.li>
  );
};
