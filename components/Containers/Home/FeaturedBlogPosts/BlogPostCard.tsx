import React from "react";
import Image from "next/image";
import { IFeaturedBlogPost } from "../../../../types/IBlog";
import { Button } from "../../../Button/Button/Button";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import styles from "./FeaturedBlogPosts.module.scss";
import { Badge } from "../../../Badge/Badge";

interface BlogPostCardProps {
  post: IFeaturedBlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className={styles.postWrapper}>
      <div className={styles.postInner}>
        <div className={styles.postImageContainer}>
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="fill"
            src={post.data.image}
            alt={post.data.title}
          />
        </div>
        <div>
          <div className={styles.postBadgeContainer}>
          <Badge colour="rgb(34, 139, 230)" backgroundColour="#0c2231" text={post.data.tech[0]} size="md" />

          </div>
          <h4>{post.data.title}</h4>
          <p>{post.data.description}</p>
          {/* <SeeAll buttonText="Read Full Article" colour="#00FFFF" /> */}
          {/* <Button text="Read More" backgroundColour="rgb(40, 45, 65)" colour="white" variant="filled" /> */}
        </div>
      </div>
    </article>
  );
};
