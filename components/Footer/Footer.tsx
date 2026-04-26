import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className={styles.footer}>
        <p>&copy; Perry Smith-Moss {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
