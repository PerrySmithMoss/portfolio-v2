import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../../types/IBlog";
import { Badge } from "../../../Badge/Badge";
import styles from "./FeaturedBlogPosts.module.scss";

interface FeaturedPostProps {
  post: IPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className={styles.featuredPostWrapper}>
      <div className={styles.featurePostImageContainer}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          className={styles.image}
        />
      </div>
      <div className={styles.featuredPostText}>
        <div className={styles.badgeContainer}>
          <Badge
            colour="rgb(34, 139, 230)"
            backgroundColour="#0c2231"
            text={post.tech[0]}
            size="lg"
          />
        </div>
        <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.description}</p>
      </div>
    </article>
  );
};
