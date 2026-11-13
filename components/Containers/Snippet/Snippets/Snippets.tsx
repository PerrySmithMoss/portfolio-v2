import { motion as m } from "framer-motion";
import React, { useMemo, useState } from "react";
import { ISnippet } from "../../../../types/ISnippet";
import { getTags } from "../../../../utils/tags";
import { Chip } from "../../../Chip/Chip";
import { SnippetCard } from "./SnippetCard";
import styles from "./Snippets.module.scss";

interface SnippetsProps {
  snippets: ISnippet[];
  tags: string[];
}

export const Snippets: React.FC<SnippetsProps> = ({ snippets, tags }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredSnippets = useMemo(() => {
    return snippets.filter((snippet) => {
      const matchesSearch =
        snippet.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        snippet.excerpt.toLowerCase().includes(searchInput.toLowerCase()) ||
        snippet.tags.some((tag) =>
          tag.toLowerCase().includes(searchInput.toLowerCase())
        );

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => snippet.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [snippets, searchInput, selectedTags]);

  const availableTags = useMemo(() => getTags(snippets), [snippets]);

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
            <h1>Snippets</h1>
          </div>
          <div className={styles.subHeading}>
            <p>Small pieces of code for tasks I’ve come across while building things.</p>
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
                aria-label="Search snippets"
                className={styles.searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                type="text"
                placeholder="Search snippets..."
              />
              {searchInput && (
                <button aria-label="Clear snippet search" onClick={() => setSearchInput("")} className={styles.iconContainer}>
                  <span className={`${styles.icon} ${styles.cursor}`}>
                    {/* Simplified Close SVG */}
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
                  disabled={!availableTags.includes(tag)}
                >
                  {isChecked && (
                    <svg viewBox="0 0 10 7" height="10px" width="12px" fill="#228be6" style={{ marginRight: '4px' }}>
                      <path d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  )}
                  <span>{tag}</span>
                </Chip>
              );
            })}
          </div>

          <ul className={styles.snippetsGrid}>
            {filteredSnippets.length > 0 ? (
              filteredSnippets.map((snippet) => (
                <SnippetCard key={snippet.id} snippet={snippet} />
              ))
            ) : (
              <div className={styles.noResults}>No matching snippets. Try another search or remove a filter.</div>
            )}
          </ul>
        </m.div>
      </div>
    </section>
  );
};
