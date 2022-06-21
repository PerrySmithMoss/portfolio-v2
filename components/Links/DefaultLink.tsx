import Link, { LinkProps } from "next/link";
import React from "react";

export type DefaultLinkProps = {
  href?: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<"a"> &
  LinkProps;

export const DefaultLink: React.FC<DefaultLinkProps> = ({
  href,
  children,
  openInNewTab,
  className,
  ...rest
}) => {
  const isNewTab =
    openInNewTab !== undefined
      ? openInNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

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
      className={`${className} cursor-newtab`}
    >
      {children}
    </a>
  );
};
