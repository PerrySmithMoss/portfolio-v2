import Link from "next/link";
import React from "react";
import { DefaultLink } from "./DefaultLink";
import styles from "./Link.module.scss";

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  className,
  href,
  ...rest
}) => {
  const isNewTab = href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={`${styles.customLink} ${className}`}
    >
      {children}
    </a>
  );
};
