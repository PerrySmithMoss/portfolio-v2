import React from "react";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import styles from "./Blog.module.scss";
import { Badge } from "../../../Badge/Badge";
import Link from "next/link";
import { HiOutlineClock } from "react-icons/hi";

interface BlogProps {
  featuredBlogPosts: IPost[];
  otherBlogPosts: IPost[];
}

export const Blog: React.FC<BlogProps> = ({
  featuredBlogPosts,
  otherBlogPosts,
}) => {
  const allPosts = featuredBlogPosts.concat(otherBlogPosts);
  return (
    <section className={styles.blogWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerBorderLeft}>
          <h1>Latest Posts</h1>
        </div>
        <div className={styles.allPostsGrid}>
          {allPosts.map((post: IPost) => (
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
    </section>
  );
};
