import React from "react";
import Link from "next/link";
import styles from "./Post.module.scss";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import { Badge } from "../../../Badge/Badge";
import { TableOfContents } from "../../../TableOfContents/TableOfContents";
import { IHeading } from "../../../../types/IMedia";
import {
  HiOutlineClock,
  HiOutlinePencil,
  HiOutlineCalendar,
} from "react-icons/hi";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXComponents } from "../../../MDXComponents/MDXComponents";

interface PostContainerProps {
  mdxSource: any;
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
  const Component = React.useMemo(
    () => getMDXComponent(mdxSource),
    [mdxSource]
  );
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.heroImage}>
          <Image priority src={frontMatter.image} height={600} width={1300} />
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
            <HiOutlinePencil />
            <div>
              <p>
                <span>Perry Smith-Moss</span>
              </p>
            </div>
          </li>
          <li className={styles.flex}>
            <HiOutlineCalendar />
            <div>
              <p>
                <span>May 23rd, 2022</span>
              </p>
            </div>
          </li>

          <li className={styles.flex}>
            <HiOutlineClock />
            <div>
              <p>
                <span>{frontMatter.readingTime} minute read</span>
              </p>
            </div>
          </li>
        </ul>
        <div className={styles.grid}>
          <article className={`${styles.markdown} markdown`}>
            <div className={styles.articleBody}>
              <Component
                components={
                  {
                    ...MDXComponents,
                  } as any
                }
              />
            </div>
          </article>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarOuter}>
              <div className={styles.sidebarInner}>
                <TableOfContents headings={headings} />
              </div>
            </div>
          </aside>
        </div>
        <div className={styles.recommendationsContainer}>
          <h2>Other posts you may like</h2>
          <div className={styles.recommendationsGrid}>
            {recommendations.map((post: IPost) => (
              <article key={post.id} className={styles.otherPost}>
                <Image
                  height={500}
                  width={750}
                  objectFit="cover"
                  className={styles.image}
                  src={post.image}
                  alt={post.title}
                />

                <div>
                  <div className={styles.badgeWrapper}>
                    <Badge
                      colour="rgb(34, 139, 230)"
                      backgroundColour="#0c2231"
                      text={post.tech[0]}
                      size="md"
                    />
                  </div>
                  <Link href={`/blog/${post!.slug}`}>
                    <div>
                      <h3>{post.title}</h3>
                    </div>
                  </Link>
                  <div>
                    <p>{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
