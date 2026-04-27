import Link from "next/link";
import React from "react";
import { ISnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import styles from "./FeaturedSnippets.module.scss";

interface SnippetCardProps {
  snippet: ISnippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <Link 
      href={`/snippets/${snippet.slug}`} 
      className={styles.cardLink}
    >
      <article id={snippet.id} className={styles.cardWrapper}>
        <div className={styles.cardBody}>
          <header className={styles.cardHeader}>
            <h4>{snippet.title}</h4>
          </header>
          <div className={styles.iconWrapper}>
            <DynamicTechIcons techs={snippet.tech as Array<TechListType>} />
          </div>
          <p>{snippet.excerpt}</p>
        </div>
      </article>
    </Link>
  );
};