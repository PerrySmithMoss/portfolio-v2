import React from "react";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import styles from "./FeaturedSnippets.module.scss";
import { IFeaturedSnippet } from "../../../../types/ISnippet";
import { SnippetCard } from "./SnippetCard";

interface FeaturedSnippetsProps {
  featuredSnippets: IFeaturedSnippet[];
}

export const FeaturedSnippets: React.FC<FeaturedSnippetsProps> = ({
  featuredSnippets,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
      <div className={styles.headerBorderLeft}>
          <h2>Featured Code Snippets</h2>
        </div>
        <div className={styles.arrowContainer}>
          <SeeAll colour="#00FFFF" buttonText="View more" />
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsGrid}>
          {featuredSnippets.map((snippet: IFeaturedSnippet) => (
            <SnippetCard key={snippet.data.id} snippet={snippet} />
          ))}
        </div>
      </div>
    </section>
  );
};
