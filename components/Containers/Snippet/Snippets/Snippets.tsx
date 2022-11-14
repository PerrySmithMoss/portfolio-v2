import React, { useEffect, useState } from "react";
import { ISnippet } from "../../../../types/ISnippet";
import { getTags } from "../../../../utils/tags";
import { Chip } from "../../../Chip/Chip";
import { SnippetCard } from "./SnippetCard";
import styles from "./Snippets.module.scss";
import { motion as m } from "framer-motion";

interface SnippetsProps {
  snippets: ISnippet[];
  tags: string[];
}

export const Snippets: React.FC<SnippetsProps> = ({ snippets, tags }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredSnippets, setFilteredSnippets] =
    useState<ISnippet[]>(snippets);

  useEffect(() => {
    const snippetResults = snippets.filter((snippet: ISnippet) => {
      return selectedTags.every((tag: string) => snippet.tags.includes(tag));
    });

    setFilteredSnippets(snippetResults);
  }, [selectedTags]);

  useEffect(() => {
    const snippetResults = snippets.filter((snippet: ISnippet) => {
      return (
        snippet.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        snippet.excerpt.toLowerCase().includes(searchInput.toLowerCase()) ||
        snippet.tags.find((tag: string) =>
          tag.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    });

    setFilteredSnippets(snippetResults);
  }, [searchInput]);

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
          <div className={styles.headerBorderLeft}>
            <h1>Snippets</h1>
          </div>
          <div className={styles.subHeading}>
            <p>
              Here is a collection of code snippets which you may find useful.
            </p>
          </div>
          <div>
            <div className={styles.searchContainer}>
              <div className={styles.searchInner}>
                <div className={styles.iconContainer}>
                  <span className={styles.icon}>
                    <svg
                      height="26px"
                      width="26px"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        // fill={iconColor  ? iconColor : "#97C339"}
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </div>
                <input
                  className={styles.searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                  name="name"
                  type="text"
                  required
                  placeholder="Search..."
                />
                {searchInput.length > 0 ? (
                  <button
                    onClick={(e) => setSearchInput("")}
                    className={styles.iconContainer}
                  >
                    <span className={`${styles.icon} ${styles.cursor}`}>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                        >
                          <g
                            id="Header/Logged-Out-Search-Bar"
                            transform="translate(-960.000000, -71.000000)"
                            stroke="#b1bdc5"
                            strokeWidth="2"
                          >
                            <g
                              id="Group-2"
                              transform="translate(972.000000, 83.000000) rotate(-315.000000) translate(-972.000000, -83.000000) translate(964.000000, 76.000000)"
                            >
                              <line
                                x1="0.888888889"
                                y1="7"
                                x2="15.1111111"
                                y2="7"
                                id="Line-3"
                              ></line>
                              <line
                                x1="8"
                                y1="0"
                                x2="8"
                                y2="14"
                                id="Line-3-Copy"
                              ></line>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                ) : null}
              </div>
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
                filteredSnippets.map((snippet: ISnippet) => (
                  <SnippetCard key={snippet.id} snippet={snippet} />
                ))
              ) : (
                <div style={{ color: "white" }}>No snippets to show</div>
              )}
            </ul>
          </div>
        </m.div>
      </div>
    </section>
  );
};
