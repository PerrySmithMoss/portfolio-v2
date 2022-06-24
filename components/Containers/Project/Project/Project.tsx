import React from "react";
import Link from "next/link";
import { ISnippet } from "../../../../types/ISnippet";
import {
  DynamicTechIcons,
  TechListType,
} from "../../../DynamicIcon/DynamicTechIcon";
import { SocialLinks } from "../../../SocialLinks/SocialLinks";
import styles from "./Product.module.scss";
import { MDXComponents } from "../../../MDXComponents/MDXComponents";
import { getMDXComponent } from "mdx-bundler/client";
import { IHeading } from "../../../../types/IMedia";

interface ProjectContainerProps {
  content: any;
  frontMatter: ISnippet;
  recommendations: ISnippet[];
  headings: IHeading[];
}

export const ProjectContainer: React.FC<ProjectContainerProps> = ({
  content,
  frontMatter,
  recommendations,
  headings
}) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);
  return (
    <section className={styles.snippetsWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <article>
            <h1>{frontMatter.title}</h1>
            <p>{frontMatter.excerpt}</p>
            <div>
              <DynamicTechIcons
                techs={frontMatter.tech as Array<TechListType>}
              />
            </div>

            <div className={styles.articleBody}>
              <Component
                components={
                  {
                    ...MDXComponents,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </div>
          </article>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarOuter}>
              <div className={styles.sidebarInner}>
                <h3>Follow me</h3>
                <div className={styles.socialLinksContainer}>
                  <SocialLinks />
                </div>
                <h3>Other Snippets</h3>
                <ul className={styles.recommendations}>
                  {recommendations.map((recommendation: ISnippet) => (
                    <Link
                      key={recommendation.slug}
                      href={`/snippets/${recommendation.slug}`}
                    >
                      <li className={styles.recommendationWrapper}>
                        <p>{recommendation.title}</p>
                        <DynamicTechIcons
                          techs={recommendation.tech as Array<TechListType>}
                        />
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
