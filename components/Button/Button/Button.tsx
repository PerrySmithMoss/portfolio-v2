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
  submissionType?: "submit" | "button" | "reset";
  backgroundColour?: string;
  size?: "sm" | "md" | "lg" | "none";
  type?: "primary" | "secondary" | "accent";
  onClick?: () => void;
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
  type = "primary",
  size = "md",
  onClick,
  submissionType = "button",
}) => {
  const dynamicStyles: React.CSSProperties = {
    color: colour || "#00FFFF",
    backgroundColor: backgroundColour || "transparent",
    fontSize: fontSize || "14px",
  };

  const classNames = [
    styles.baseButton,
    styles[`${type}Button`], 
    styles[variant],       
    styles[size],          
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {children}
      {text}
    </>
  );

  // external Link
  if (link && external) {
    return (
      <a
        href={link}
        className={classNames}
        style={dynamicStyles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // internal Next.js Link
  if (link) {
    return (
      <Link 
        href={link} 
        className={classNames} 
        style={dynamicStyles}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={submissionType}
      className={classNames}
      style={dynamicStyles}
      onClick={onClick}
    >
      {content}
    </button>
  );
};