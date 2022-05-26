import Image from "next/image";
import React from "react";
import { IFeaturedSnippet } from "../../../../types/ISnippet";
import { IFeaturedProject } from "../../../../types/IProject";
import { Badge } from "../../../Badge/Badge";
import { Button } from "../../../Button/Button/Button";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import { DynamicTechIcons, TechListType } from "../../../DynamicIcon/DynamicTechIcon";
import styles from "./FeaturedSnippets.module.scss";

interface SnippetCardProps {
  snippet: IFeaturedSnippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <article className={styles.cardWrapper}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h4>{snippet.data.title}</h4>
        </div>
        <DynamicTechIcons techs={snippet.data.tech as Array<TechListType>} />
        <p>{snippet.data.excerpt}</p>
      </div>
    </article>
  );
};
