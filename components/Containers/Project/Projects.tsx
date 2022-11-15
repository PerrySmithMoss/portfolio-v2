import React, { useEffect, useState } from "react";
import { IProject } from "../../../types/IProject";
import { getTags } from "../../../utils/tags";
import { Chip } from "../../Chip/Chip";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";
import { motion as m } from "framer-motion";

interface ProjectsProps {
  projects: IProject[];
  tags: string[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects, tags }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredSnippets, setFilteredSnippets] =
    useState<IProject[]>(projects);

  useEffect(() => {
    const snippetResults = projects.filter((project: IProject) => {
      return selectedTags.every((tag: string) => project.tags.includes(tag));
    });

    setFilteredSnippets(snippetResults);
  }, [projects, selectedTags]);

  useEffect(() => {
    const snippetResults = projects.filter((project: IProject) => {
      return (
        project.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        project.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        project.tags.find((tag: string) =>
          tag.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    });

    setFilteredSnippets(snippetResults);
  }, [projects, searchInput]);

  const availableTags = getTags(filteredSnippets);

  const toggleBadge = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevState: string[]) =>
        [...prevState].filter((tagE) => tagE !== tag)
      );
    } else {
      setSelectedTags((prevState: string[]) => [...prevState, tag]);
    }
  };

  const isTagChecked = (tag: string) => {
    return availableTags.includes(tag) && selectedTags.includes(tag);
  };

  return (
    <section className={styles.snippetsWrapper}>
      <div className={styles.wrapper}>
        <m.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <div className={styles.headerBorderLeft}>
              <h1>Projects</h1>
            </div>
            <div className={styles.subHeading}>
              <p>Check some out my of my side projects below.</p>
            </div>
          </div>
          <div className={styles.chipsContainer}>
            {tags.map((tag) => (
              <Chip
                checked={isTagChecked(tag)}
                key={tag}
                onClick={() => toggleBadge(tag)}
                disabled={!availableTags.includes(tag)}
              >
                {isTagChecked(tag) ? (
                  <span className={styles.selectedTag}>
                    <svg
                      viewBox="0 0 10 7"
                      height="10px"
                      width="12px"
                      fill="#228be6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
                        fill="#228be6"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {tag}
                  </span>
                ) : (
                  <span>{tag}</span>
                )}
              </Chip>
            ))}
          </div>
          <div>
            <ul className={styles.snippetsGrid}>
              {filteredSnippets.length > 0 ? (
                filteredSnippets.map((project: IProject) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div style={{ color: "white" }}>No projects to show</div>
              )}
            </ul>
          </div>
        </m.div>
      </div>
    </section>
  );
};
