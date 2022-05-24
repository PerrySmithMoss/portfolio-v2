import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "filled" | "outline" | "none";
  link?: string;
  text: string;
  colour?: string;
  backgroundColour?: string;
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  link,
  text,
  variant,
  colour,
  backgroundColour,
}) => {
  return (
    <>
      {link ? (
        <a
          style={{
            color: colour ? colour : "#00FFFF",
            backgroundColor: backgroundColour
              ? backgroundColour
              : "transparent",
          }}
          className={`${styles.button} ${
            variant === "filled"
              ? styles.filled
              : variant === "outline"
              ? styles.outline
              : null
          }`}
          href={link}
        >
          {text}
        </a>
      ) : (
        <a
          style={{
            color: colour ? colour : "#00FFFF",
            backgroundColor: backgroundColour
              ? backgroundColour
              : "transparent",
          }}
          className={`${styles.button} ${
            variant === "filled"
              ? styles.filled
              : variant === "outline"
              ? styles.outline
              : null
          }`}
        >
          {text}
        </a>
      )}
    </>
  );
};
