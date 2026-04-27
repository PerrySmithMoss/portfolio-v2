import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../../types/IBlog";
import { Badge } from "../../../Badge/Badge";
import styles from "./FeaturedBlogPosts.module.scss";

interface BlogPostCardProps {
  post: IPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.postLink}>
      <article className={styles.postWrapper}>
        <div className={styles.postInner}>
          <div className={styles.postImageContainer}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              className={styles.image}
              loading="eager"
            />
          </div>
          <div className={styles.postContent}>
            <div className={styles.postBadgeContainer}>
              <Badge
                colour="rgb(34, 139, 230)"
                backgroundColour="#0c2231"
                text={post.tech[0]}
                size="md"
              />
            </div>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
