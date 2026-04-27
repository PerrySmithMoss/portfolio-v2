import { motion } from "framer-motion"; // Modern import
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../../types/IBlog";
import { Badge } from "../../../Badge/Badge";
import styles from "./Blog.module.scss";

interface BlogCardProps {
  post: IPost;
}

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5, duration: 0.4 },
  },
};

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.article
      className={styles.otherPost}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={post.image}
          alt={post.title}
          width={750}
          height={500}
          sizes="(max-width: 768px) 100vw, 33vw" // Helps Next.js optimize
          className={styles.image}
          priority
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
        <p className={styles.description}>{post.description}</p>
      </div>
    </motion.article>
  );
};
