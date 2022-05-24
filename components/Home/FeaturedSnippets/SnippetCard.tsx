import Image from "next/image";
import React from "react";
import { IFeaturedSnippet } from "../../../types/ISnippet";
import { IFeaturedProject } from "../../../types/IProject";
import { Badge } from "../../Badge/Badge";
import { Button } from "../../Button/Button/Button";
import { SeeAll } from "../../Button/SeeAll/SeeAll";
import { DynamicTechIcons, TechListType } from "../../Icon/DynamicTechIcon";
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

          {/* <Badge text={project.platform} /> */}
        </div>
        <DynamicTechIcons techs={snippet.data.tech as Array<TechListType>}/>

        <p>{snippet.data.excerpt}</p>
        {/* <div className={styles.buttonsContainer}>
          <Button
            text="Read more"
            colour="white"
            backgroundColour="rgb(40, 45, 65)"
            variant="filled"
          />
          {project.links.url != null && (
            <SeeAll
              padding="0.5rem 0rem"
              colour="#00FFFF"
              buttonText="Visit site"
            />
          )}
        </div> */}
      </div>
    </article>
  );
};
