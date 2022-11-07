import React from "react";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import styles from "./Blog.module.scss";
import { Badge } from "../../../Badge/Badge";
import Link from "next/link";
import { HiOutlineClock } from "react-icons/hi";

interface BlogProps {
  posts: IPost[];
}

export const Blog: React.FC<BlogProps> = ({
  posts,
}) => {
  // Sometimes you will get error if there is a .DS_Store file in the directory where your posts are kept
  // To resolve this problem you will need to delete that file by using the following command on macOS:
  // find . -name '.DS_Store' -type f -delete
  return (
    <section className={styles.blogWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerBorderLeft}>
          <h1>Latest Posts</h1>
        </div>
        <div className={styles.allPostsGrid}>
          {posts.map((post: IPost) => (
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
