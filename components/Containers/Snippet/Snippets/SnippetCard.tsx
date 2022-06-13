import React from "react";
import { IFeaturedSnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import styles from "./Snippets.module.scss";

interface SnippetCardProps {
  snippet: IFeaturedSnippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <li className={styles.cardWrapper}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4>{snippet.data.title}</h4>
        </div>
        <DynamicTechIcons techs={snippet.data.tech as Array<TechListType>} />
        <p>{snippet.data.excerpt}</p>
      </div>
    </li>
  );
};
