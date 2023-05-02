import React from "react";
import styles from "./FeaturedSnippets.module.scss";
import { ISnippet } from "../../../../types/ISnippet";
import { SnippetCard } from "./SnippetCard";
import { Button } from "../../../Button/Button/Button";
import { motion as m } from "framer-motion";

interface FeaturedSnippetsProps {
  featuredSnippets: ISnippet[];
}

export const FeaturedSnippets: React.FC<FeaturedSnippetsProps> = ({
  featuredSnippets,
}) => {
  return (
    <section className={styles.wrapper}>
      <m.div
        initial={"offscreen"}
        variants={{
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
          },
        }}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.header}>
          <div className={styles.headerBorderLeft}>
            <h2>Featured Snippets</h2>
          </div>
        </div>
        <div className={styles.snippetsContainer}>
          <div className={styles.snippetsGrid}>
            {featuredSnippets.map((snippet: ISnippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
          <div className={styles.loadMoreButton}>
            <Button
              text="See more"
              variant="outline"
              size="lg"
              colour="#00FFFF"
              link="/snippets"
            />
          </div>
        </div>
      </m.div>
    </section>
  );
};
