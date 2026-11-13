import React from "react";
import { IPost } from "../../../../types/IBlog";
import styles from "./Blog.module.scss";
import { motion as m } from "framer-motion";
import { BlogCard } from "./BlogCard";

interface BlogProps {
  posts: IPost[];
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section className={styles.blogWrapper}>
      <div className={styles.wrapper}>
        <m.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.headerBorderLeft}>
            <h1>Blog</h1>
          </div>
          <div className={styles.subHeading}>
            <p>
              Notes and tutorials from things I’ve built and learned.
            </p>
          </div>
          <div className={styles.allPostsGrid}>
            {posts.map((post: IPost) => (
              <BlogCard post={post} key={post.id} />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};
