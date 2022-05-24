import React from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <section className={styles.loaderBody}>
      <div className={styles.container}>
        <div className={styles.glitch} data-text="Perry Smith-Moss">
          Perry Smith-Moss
        </div>
        <div className={styles.glow}>Perry Smith-Moss</div>
        <p className={styles.subtitle}>Software Engineer</p>
      </div>
      <div className={styles.scanlines}></div>
    </section>
  );
};
