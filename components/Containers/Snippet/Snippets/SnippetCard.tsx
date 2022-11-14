import React from "react";
import Link from "next/link";
import { ISnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import styles from "./Snippets.module.scss";
import { motion as m } from "framer-motion";

interface SnippetCardProps {
  snippet: ISnippet;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  return (
    <m.li
      className={styles.cardWrapper}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Link href={`/snippets/${snippet.slug}`}>
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h4>{snippet.title}</h4>
          </div>
          <DynamicTechIcons techs={snippet.tech as Array<TechListType>} />
          <p>{snippet.excerpt}</p>
        </div>
      </Link>
    </m.li>
  );
};
