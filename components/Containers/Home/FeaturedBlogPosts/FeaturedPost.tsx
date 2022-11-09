import React from "react";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import styles from "./FeaturedBlogPosts.module.scss";
import { Badge } from "../../../Badge/Badge";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import { Button } from "../../../Button/Button/Button";
import Link from "next/link";

interface FeaturedPostProps {
  post: IPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className={styles.featuredPostWrapper}>
      <div className={styles.featurePostImageContainer}>
        {/* Image */}
        <Image
          height={55}
          width="100%"
          layout="responsive"
          objectFit="fill"
          src={post.image}
        />
      </div>
      <div className={styles.featuredPostText}>
        {/* Text */}
        <div>
          <Badge
            colour="rgb(34, 139, 230)"
            backgroundColour="#0c2231"
            text={post.tech[0]}
            size="lg"
          />
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>
        <p>{post.description}</p>
        {/* <SeeAll buttonText="Read Full Article"/> */}
        {/* <Button text="Read More" backgroundColour="rgb(40, 45, 65)" colour="white" variant="filled" /> */}
      </div>
    </article>
  );
};
