import React from "react";
import Image from "next/image";
import { IFeaturedBlogPost } from "../../../types/IBlog";
import styles from "./FeaturedBlogPosts.module.scss";
import { Badge } from "../../Badge/Badge";
import { SeeAll } from "../../Button/SeeAll/SeeAll";
import { Button } from "../../Button/Button/Button";

interface FeaturedPostProps {
  post: IFeaturedBlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className={styles.featuredPostWrapper}>
      <div className={styles.featurePostImageContainer}>
        {/* Image */}
        <Image src={post.data.image} layout="fill" objectFit="fill" />
      </div>
      <div className={styles.featuredPostText}>
        {/* Text */}
        <div>
          <Badge text={post.data.tech[0]} size="lg" />
        </div>
        <h3>{post.data.title}</h3>
        <p>{post.data.description}</p>
        {/* <SeeAll buttonText="Read Full Article"/> */}
        <Button text="Read More" backgroundColour="rgb(40, 45, 65)" colour="white" variant="filled" />
      </div>
    </article>
  );
};
