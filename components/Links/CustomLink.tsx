import Link from "next/link";
import React from "react";
import styles from "./Link.module.scss";

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  className = "",
  href,
  ...rest
}) => {
  const isExternal = href && !href.startsWith("/") && !href.startsWith("#");

  if (!isExternal) {
    return (
      <Link 
        href={href} 
        className={className} 
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.customLink} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};