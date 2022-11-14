import React from "react";
import { ISnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import styles from "./FeaturedSnippets.module.scss";
import { motion as m } from "framer-motion";

interface SnippetCardProps {
  snippet: ISnippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <m.article id={snippet.id} className={styles.cardWrapper}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4>{snippet.title}</h4>
        </div>
        <DynamicTechIcons techs={snippet.tech as Array<TechListType>} />
        <p>{snippet.excerpt}</p>
      </div>
    </m.article>
  );
};
