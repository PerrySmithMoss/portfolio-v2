import React from "react";
import Link from "next/link";
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
    <Link href={`/snippets/${snippet.slug}`}>
    <article id={snippet.id} className={styles.cardWrapper}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4>{snippet.title}</h4>
        </div>
        <DynamicTechIcons techs={snippet.tech as Array<TechListType>} />
        <p>{snippet.excerpt}</p>
      </div>
    </article>
    </Link>
  );
};
