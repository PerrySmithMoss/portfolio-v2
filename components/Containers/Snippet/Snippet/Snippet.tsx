import { getMDXComponent } from "mdx-bundler/client";
import Link from "next/link";
import React, { useMemo } from "react";
import { ISnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import { MDXComponents } from "../../../MDXComponents/MDXComponents";
import { SocialLinks } from "../../../SocialLinks/SocialLinks";
import styles from "./Snippet.module.scss";

interface SnippetProps {
  content: string;
  frontMatter: ISnippet;
  recommendations: ISnippet[];
}

export const SnippetContainer: React.FC<SnippetProps> = ({
  content,
  frontMatter,
  recommendations,
}) => {
  const Component = useMemo(() => getMDXComponent(content), [content]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <article className={styles.mainContent}>
          <header className={styles.header}>
            <h1>{frontMatter.title}</h1>
            <p className={styles.description}>{frontMatter.excerpt}</p>
            <div className={styles.techIcons}>
              <DynamicTechIcons
                techs={frontMatter.tech as Array<TechListType>}
              />
            </div>
          </header>

          <div className={`${styles.markdown} markdown`}>
            <Component components={MDXComponents} />
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarOuter}>
            <nav className={styles.sidebarInner}>
              <h3>Follow me</h3>
              <div className={styles.socialLinksContainer}>
                <SocialLinks />
              </div>

              <h3>Other Snippets</h3>
              <ul className={styles.recommendations}>
                {recommendations.map((recommendation) => (
                  <li key={recommendation.slug}>
                    <Link
                      href={`/snippets/${recommendation.slug}`}
                      className={styles.recommendationLink}
                    >
                      <div className={styles.recommendationWrapper}>
                        <p>{recommendation.title}</p>
                        <DynamicTechIcons
                          techs={recommendation.tech as Array<TechListType>}
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
};