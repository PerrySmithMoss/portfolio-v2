import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPost } from "../../../../types/IBlog";
import { Badge } from "../../../Badge/Badge";
import styles from "./Blog.module.scss";

interface FeaturedPostProps {
  post: IPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.featuredLink}>
      <article className={styles.featuredPost}>
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <Badge
              colour="rgb(34, 139, 230)"
              backgroundColour="#0c2231"
              text={post.tech[0]}
              size="lg"
            />
          </div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </article>
    </Link>
  );
};