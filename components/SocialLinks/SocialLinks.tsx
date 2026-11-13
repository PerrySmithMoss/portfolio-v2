import React from "react";
import styles from "./SocialLinks.module.scss";

interface SocialLinksProps {
  align?: "left" | "center" | "right";
  size?: "small" | "large";
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ align, size }) => {
  return (
    <div className={styles.socialsContainer}>
      <ul
        className={`${styles.socialNetworks} ${styles.spinIcon} ${
          align === "center"
            ? styles.center
            : align === "right"
            ? styles.right
            : styles.left
        }`}
      >
        <li>
          <a rel="noreferrer" href="https://github.com/PerrySmithMoss" target="_blank">
            <span
              className={`${styles.iconGithub} ${
                size === "large" ? styles.large : styles.small
              } icon-github`}
            >
              GitHub
            </span>
          </a>
        </li>
        <li>
          <a rel="noreferrer" href="https://www.linkedin.com/in/perrysmithmoss" target="_blank">
            <span
              className={`${styles.iconLinkedIn} ${
                size === "large" ? styles.large : styles.small
              } icon-linkedin2`}
            >
              LinkedIn
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
