import { useRouter } from "next/router";
import React, { Children } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { IHeading } from "../../types/IMedia";
import { DefaultLink } from "../Links/DefaultLink";
import styles from "./TableOfContents.module.scss";

interface TableOfContentsProps {
  headings: IHeading[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  headings,
}) => {
  const router = useRouter();
  // console.log(headings);
  // const activeId = useScrollSpy(
  //   headings.map(({ slug }) => slug),
  //   { rootMargin: "0% 0% -40% 0%" }
  // );

  const activeSection = useScrollSpy();

  console.log(activeSection);
  return (
    <div className={styles.tableOfContentsWrapper}>
      <h3>Table of contents</h3>
      <div className={styles.tableOfContentsLinksContainer}>
        {headings.map((heading: IHeading, index) => (
          // <a
          //   key={index}
          //   style={{
          //     marginLeft: heading.indent > 2 ? `${heading.indent * 5}px` : 0,
          //   }}
          //   href={`${router.asPath}#${heading.slug}`}
          // >
          //   {heading.content}
          // </a>
          <DefaultLink
            key={index}
            style={{
              color: activeSection === heading.slug ? "white" : "rgb(107 114 128)",
              marginLeft: heading.indent > 2 ? `${heading.indent * 5}px` : 0,
            }}
            href={`${router.asPath}#${heading.slug}`}
          >
            {heading.content}
          </DefaultLink>
        ))}
      </div>
    </div>
  );
};
