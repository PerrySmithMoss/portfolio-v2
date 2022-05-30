import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className={styles.footer}>
        <p>&copy; Perry Smith-Moss 2022</p>
        <div>&bull;</div>
        <p>
          <a className={styles.feedbackLink}>Feedback</a> is always appreciated.
        </p>
      </div>
    </footer>
  );
};
