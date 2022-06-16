import React from "react";
import { IPost } from "../../../../types/IBlog";
import Image from "next/image";
import { Badge } from "../../../Badge/Badge";
import styles from "./Blog.module.scss";
import Link from "next/link";

interface FeaturedPostProps {
  post: IPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={styles.featuredPost}>
        <div className={styles.imageContainer}>
          <Image
            layout="fill"
            objectFit="cover"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className={styles.badgeWrapper}>
          <Badge
            colour="rgb(34, 139, 230)"
            backgroundColour="#0c2231"
            text={post.tech[0]}
            size="lg"
          />
        </div>
        <div>
          <h2>{post.title}</h2>
        </div>
        <div>
          <p>{post.description}</p>
        </div>
      </article>
    </Link>
  );
};
