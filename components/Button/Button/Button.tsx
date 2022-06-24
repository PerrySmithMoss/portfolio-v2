import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "filled" | "outline" | "none";
  children?: React.ReactNode;
  link?: string;
  text: string;
  colour?: string;
  backgroundColour?: string;
  size?: "sm" | "md" | "lg" | "none";
  type?: "primary" | "secondary" | "accent";
}

export const Button: React.FC<ButtonProps> = ({
  link,
  children,
  text,
  variant,
  colour,
  backgroundColour,
  type,
  size,
}) => {
  if (type === "accent")
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
            className={`${styles.accentButton} ${
              variant === "filled"
                ? styles.filled
                : variant === "outline"
                ? styles.outline
                : null
            } ${
              size === "lg"
                ? styles.large
                : size === "sm"
                ? styles.small
                : size === "md"
                ? styles.medium
                : styles.none
            }`}
            href={link}
          >
            {children}
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
            className={`${styles.accentButton} ${
              variant === "filled"
                ? styles.filled
                : variant === "outline"
                ? styles.outline
                : null
            } ${
              size === "lg"
                ? styles.large
                : size === "sm"
                ? styles.small
                : size === "md"
                ? styles.medium
                : styles.none
            }`}
          >
            {children}
            {text}
          </a>
        )}
      </>
    );
  else if (type === "secondary")
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
            className={`${styles.secondaryButton} ${
              variant === "filled"
                ? styles.filled
                : variant === "outline"
                ? styles.outline
                : null
            } ${
              size === "lg"
                ? styles.large
                : size === "sm"
                ? styles.small
                : size === "md"
                ? styles.medium
                : styles.none
            }`}
            href={link}
          >
            {children}
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
            className={`${styles.secondaryButton} ${
              variant === "filled"
                ? styles.filled
                : variant === "outline"
                ? styles.outline
                : null
            } ${
              size === "lg"
                ? styles.large
                : size === "sm"
                ? styles.small
                : size === "md"
                ? styles.medium
                : styles.none
            }`}
          >
            {children}
            {text}
          </a>
        )}
      </>
    );
  else
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
            className={`${styles.primaryButton} ${
              variant === "filled"
                ? styles.filled
                : variant === "outline"
                ? styles.outline
                : null
            } ${
              size === "lg"
                ? styles.large
                : size === "sm"
                ? styles.small
                : size === "md"
                ? styles.medium
                : styles.none
            }`}
            href={link}
          >
            {children}
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
            className={`${styles.primaryButton} ${
              variant === "filled"
                ? styles.filled
                : variant === "outline"
                ? styles.outline
                : null
            } ${
              size === "lg"
                ? styles.large
                : size === "sm"
                ? styles.small
                : size === "md"
                ? styles.medium
                : styles.none
            }`}
          >
            {children}
            {text}
          </a>
        )}
      </>
    );
};
