import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  text: string;
  size?: "sm" | "md" | "lg";
  colour?: string;
  backgroundColour?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  size,
  colour,
  backgroundColour,
}) => {
  return (
    <div className={styles.badgeWrapper}>
      <div
        style={{
          backgroundColor: backgroundColour ? backgroundColour : "transparent",
        }}
        className={`${styles.badgeOuter} ${
          size === "lg"
            ? styles.large
            : size === "sm"
            ? styles.small
            : styles.medium
        }`}
      >
        <span
          style={{
            color: colour ? colour : "#00FFFF",
            backgroundColor: backgroundColour
              ? backgroundColour
              : "transparent",
          }}
          className={styles.badgeInner}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
