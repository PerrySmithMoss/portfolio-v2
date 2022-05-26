import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  text: string;
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({ text, size }) => {
  return (
    <div className={styles.badgeWrapper}>
      <div
        className={`${styles.badgeOuter} ${
          size === "lg"
            ? styles.large
            : size === "sm"
            ? styles.small
            : styles.medium
        }`}
      >
        <span className={styles.badgeInner}>{text}</span>
      </div>
    </div>
  );
};
