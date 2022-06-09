import React from "react";
import { IFeaturedBlogPost } from "../../../types/IBlog";
import Image from "next/image";
import { Badge } from "../../Badge/Badge";
import styles from "./Blog.module.scss";

interface FeaturedPostProps {
  post: IFeaturedBlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className={styles.featuredPost}>
      <div className={styles.imageContainer}>
        <Image
          layout="fill"
          objectFit="cover"
          src={post.data.image}
          alt={post.data.title}
        />
      </div>
      <div className={styles.badgeWrapper}>
        <Badge
          colour="rgb(34, 139, 230)"
          backgroundColour="#0c2231"
          text={post.data.tech[0]}
          size="lg"
        />
      </div>
      <div>
        <h2>{post.data.title}</h2>
      </div>
      <div>
        <p>{post.data.description}</p>
      </div>
    </article>
  );
};
