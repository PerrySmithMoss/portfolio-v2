import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.badgeOuter}>
        <span className={styles.badgeInner}>{text}</span>
      </div>
    </div>
  );
};
