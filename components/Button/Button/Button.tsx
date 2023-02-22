import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: "filled" | "outline" | "none";
  children?: React.ReactNode;
  link?: string;
  external?: boolean;
  text: string;
  colour?: string;
  fontSize?: string;
  backgroundColour?: string;
  size?: "sm" | "md" | "lg" | "none";
  type?: "primary" | "secondary" | "accent";
}

export const Button: React.FC<ButtonProps> = ({
  link,
  external,
  children,
  text,
  variant,
  fontSize,
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
              fontSize: fontSize ? fontSize : "14px",
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
            target={external ? "_blank" : "_self"}
            rel="noreferrer"
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
              fontSize: fontSize ? fontSize : "14px",
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
            target={external ? "_blank" : "_self"}
            rel="noreferrer"
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
          <Link href={link}>
            <a
              style={{
                color: colour ? colour : "#00FFFF",
                backgroundColor: backgroundColour
                  ? backgroundColour
                  : "transparent",
                fontSize: fontSize ? fontSize : "14px",
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
          </Link>
        ) : (
          <a
            style={{
              color: colour ? colour : "#00FFFF",
              backgroundColor: backgroundColour
                ? backgroundColour
                : "transparent",
              fontSize: fontSize ? fontSize : "14px",
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
            target={external ? "_blank" : "_self"}
            rel="noreferrer"
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
          <Link href={link}>
            <a
              style={{
                color: colour ? colour : "#00FFFF",
                backgroundColor: backgroundColour
                  ? backgroundColour
                  : "transparent",
                fontSize: fontSize ? fontSize : "14px",
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
              target={external ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {children}
              {text}
            </a>
          </Link>
        ) : (
          <a
            style={{
              color: colour ? colour : "#00FFFF",
              backgroundColor: backgroundColour
                ? backgroundColour
                : "transparent",
              fontSize: fontSize ? fontSize : "14px",
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
            target={external ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {children}
            {text}
          </a>
        )}
      </>
    );
};
