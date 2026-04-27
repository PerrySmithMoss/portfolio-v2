import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
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
    <motion.li
      className={styles.cardWrapper}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <Link href={`/snippets/${snippet.slug}`} className={styles.cardLink}>
        <div className={styles.cardBody}>
          <header className={styles.cardHeader}>
            <h4>{snippet.title}</h4>
          </header>
          <div className={styles.iconContainer}>
            <DynamicTechIcons techs={snippet.tech as Array<TechListType>} />
          </div>
          <p>{snippet.excerpt}</p>
        </div>
      </Link>
    </motion.li>
  );
};