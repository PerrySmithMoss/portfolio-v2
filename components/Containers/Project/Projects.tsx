import { motion as m } from "framer-motion";
import React, { useMemo, useState } from "react";
import { IProject } from "../../../types/IProject";
import { getTags } from "../../../utils/tags";
import { Chip } from "../../Chip/Chip";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  projects: IProject[];
  tags: string[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects, tags }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        project.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchInput.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [projects, searchInput, selectedTags]);

  const currentAvailableTags = getTags(projects);

  const toggleBadge = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <section className={styles.snippetsWrapper}>
      <div className={styles.wrapper}>
        <m.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.headerBorderLeft}>
            <h1>Projects</h1>
          </div>
          <div className={styles.subHeading}>
            <p>Check some out my of my side projects below.</p>
          </div>

          <div className={styles.searchContainer}>
            <div className={styles.searchInner}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>
                  <svg height="26px" width="26px" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white" />
                  </svg>
                </span>
              </div>
              <input
                name="search-snippets"
                className={styles.searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                type="text"
                placeholder="Search projects..."
              />
              {searchInput && (
                <button onClick={() => setSearchInput("")} className={styles.iconContainer}>
                  <span className={`${styles.icon} ${styles.cursor}`}>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className={styles.chipsContainer}>
            {tags.map((tag) => {
              const isChecked = selectedTags.includes(tag);
              return (
                <Chip
                  key={tag}
                  checked={isChecked}
                  onClick={() => toggleBadge(tag)}
                  // Disable if no projects in the FULL list have this tag
                  disabled={!currentAvailableTags.includes(tag)}
                >
                  {isChecked && (
                    <svg
                      viewBox="0 0 10 7"
                      height="10px"
                      width="12px"
                      fill="#228be6"
                      style={{ marginRight: '4px' }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span>{tag}</span>
                </Chip>
              );
            })}
          </div>

          <ul className={styles.snippetsGrid}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className={styles.noResults}>No projects match your criteria</div>
            )}
          </ul>
        </m.div>
      </div>
    </section>
  );
};