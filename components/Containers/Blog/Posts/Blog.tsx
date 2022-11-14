import React from "react";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import styles from "./Blog.module.scss";
import { Badge } from "../../../Badge/Badge";
import Link from "next/link";
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
            <h1>Latest Posts</h1>
          </div>
          <div className={styles.subHeading}>
            <p>
              Here are some of my how tos, mental models and where I look into
              the new trends of Web Development.
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
