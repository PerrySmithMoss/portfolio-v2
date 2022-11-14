import React from "react";
import { IPost } from "../../../../types/IBlog";
import { motion as m } from "framer-motion";
import styles from "./Blog.module.scss";
import { Badge } from "../../../Badge/Badge";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: IPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <m.article
      key={post.id}
      className={styles.otherPost}
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
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
    </m.article>
  );
};
