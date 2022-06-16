import { MDXRemote } from "next-mdx-remote";
import React from "react";
import Link from "next/link";
import styles from "./Post.module.scss";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import { Badge } from "../../../Badge/Badge";
import { TableOfContents } from "../../../TableOfContents/TableOfContents";
import { IHeading } from "../../../../types/IMedia";

interface PostContainerProps {
  content: any;
  frontMatter: IPost;
  recommendations: IPost[];
  headings: IHeading[]
}

export const PostContainer: React.FC<PostContainerProps> = ({
  content,
  frontMatter,
  recommendations,
  headings
}) => {
  console.log(headings)
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.heroImage}>
          <Image src={frontMatter.image} height={500} width={1300} />
        </div>
        <Badge
          colour="rgb(34, 139, 230)"
          backgroundColour="#0c2231"
          text={frontMatter.tech[0]}
          size="lg"
        />
        <div className={styles.blogHeader}>
          <h1>{frontMatter.title}</h1>
          <p>Published May 23rd, 2022</p>
        </div>
        <div className={styles.blogInfo}>
          <div>
            <p> Perry Smith-Moss</p>
          </div>
          <div className={styles.readingTime}>
            <p>{frontMatter.readingTime} minute read</p>
          </div>
        </div>
        <div className={styles.grid}>
          <article>
            <div className={styles.articleBody}>
              <MDXRemote {...content} />
            </div>
          </article>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarOuter}>
              <div className={styles.sidebarInner}>
                <TableOfContents headings={headings}/>
              </div>
            </div>
          </aside>
        </div>
        <div className={styles.recommendationsGrid}>
          {recommendations.map((post: IPost) => (
            <article key={post.id} className={styles.otherPost}>
              <Image
                height={400}
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
    </section>
  );
};
