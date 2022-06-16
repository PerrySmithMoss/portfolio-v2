import React from "react";
import { IHeading } from "../../types/IMedia";
import styles from "./TableOfContents.module.scss";

interface TableOfContentsProps {
    headings: IHeading[]
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  return (
    <div className={styles.tableOfContentsWrapper}>
      <h3>Table of contents</h3>
      <div className={styles.tableOfContentsLinksContainer}>
        {headings.map((heading: IHeading) => (
          <a style={{marginLeft: heading.indent > 2 ? `${heading.indent * 5}px` : 0}} href="#">{heading.content}</a>
        ))}
      </div>
    </div>
  );
};
