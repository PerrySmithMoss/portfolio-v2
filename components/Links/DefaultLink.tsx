import Link, { LinkProps } from "next/link";
import React from "react";

export type DefaultLinkProps = {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href"> &
  LinkProps;

export const DefaultLink: React.FC<DefaultLinkProps> = ({
  href,
  children,
  openInNewTab,
  className,
  ...rest
}) => {
  const isExternal =
    openInNewTab !== undefined
      ? openInNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

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
      className={`${className || ""} cursor-newtab`}
      {...rest}
    >
      {children}
    </a>
  );
};