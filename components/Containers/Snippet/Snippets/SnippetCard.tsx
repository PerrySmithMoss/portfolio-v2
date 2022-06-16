import React from "react";
import Link from "next/link";
import { ISnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import styles from "./Snippets.module.scss";

interface SnippetCardProps {
  snippet: ISnippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <li className={styles.cardWrapper}>
      <Link href={`/snippets/${snippet.slug}`}>
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h4>{snippet.title}</h4>
          </div>
          <DynamicTechIcons techs={snippet.tech as Array<TechListType>} />
          <p>{snippet.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
