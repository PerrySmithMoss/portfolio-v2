import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { HiOutlineCalendar, HiOutlineClock, HiOutlinePencil } from "react-icons/hi";

import { IPost } from "../../../../types/IBlog";
import { IHeading } from "../../../../types/IMedia";
import { Badge } from "../../../Badge/Badge";
import { MDXComponents } from "../../../MDXComponents/MDXComponents";
import { TableOfContents } from "../../../TableOfContents/TableOfContents";

import styles from "./Post.module.scss";

interface PostContainerProps {
  mdxSource: string;
  frontMatter: IPost;
  recommendations: IPost[];
  headings: IHeading[];
}

export const PostContainer: React.FC<PostContainerProps> = ({
  mdxSource,
  frontMatter,
  recommendations,
  headings,
}) => {
  const Component = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return (
    <section className={styles.wrapper}>
      <header className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            priority
            src={frontMatter.image}
            fill
            sizes="100vw"
            alt={frontMatter.title}
            style={{ objectFit: "cover" }}
          />
        </div>

        <Badge
          colour="rgb(34, 139, 230)"
          backgroundColour="#0c2231"
          text={frontMatter.tech[0]}
          size="lg"
        />

        <div className={styles.blogHeader}>
          <h1>{frontMatter.title}</h1>
        </div>

        <ul className={styles.blogInfo}>
          <li className={styles.flex}>
            <HiOutlinePencil aria-hidden="true" />
            <span>Perry Smith-Moss</span>
          </li>
          <li className={styles.flex}>
            <HiOutlineCalendar aria-hidden="true" />
            <time dateTime="2022-05-23">May 23rd, 2022</time>
          </li>
          <li className={styles.flex}>
            <HiOutlineClock aria-hidden="true" />
            <span>{frontMatter.readingTime} minute read</span>
          </li>
        </ul>
      </header>

      <div className={styles.grid}>
        <article className={`${styles.markdown} markdown`}>
          <div className={styles.articleBody}>
            <Component components={MDXComponents} />
          </div>
        </article>

        <aside className={styles.sidebar}>
          <nav className={styles.sidebarSticky}>
            <TableOfContents headings={headings} />
          </nav>
        </aside>
      </div>

      <section className={styles.recommendationsContainer}>
        <h2>Other posts you may like</h2>
        <div className={styles.recommendationsGrid}>
          {recommendations.map((post) => (
            <article key={post.id} className={styles.otherPost}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={750}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.badgeWrapper}>
                  <Badge
                    colour="rgb(34, 139, 230)"
                    backgroundColour="#0c2231"
                    text={post.tech[0]}
                    size="md"
                  />
                </div>

                <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                  <h3>{post.title}</h3>
                </Link>

                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};
