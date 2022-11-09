import React from "react";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import styles from "./FeaturedBlogPosts.module.scss";
import { Badge } from "../../../Badge/Badge";
import Link from "next/link";

interface BlogPostCardProps {
  post: IPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
    <article className={styles.postWrapper}>
      <div className={styles.postInner}>
        <div className={styles.postImageContainer}>
          <Image
            height={75}
            width="100%"
            // width="100%"
            // height="100%"
            layout="responsive"
            objectFit="fill"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div>
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
