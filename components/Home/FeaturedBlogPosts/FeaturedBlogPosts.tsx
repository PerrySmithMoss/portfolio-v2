import React from "react";
import { IFeaturedBlogPost } from "../../../types/IBlog";
import { SeeAll } from "../../Button/SeeAll/SeeAll";
import { BlogPostCard } from "./BlogPostCard";
import styles from "./FeaturedBlogPosts.module.scss";
import { FeaturedPost } from "./FeaturedPost";

interface FeaturedBlogPostsProps {
  featuredBlogPosts: IFeaturedBlogPost[];
}

export const FeaturedBlogPosts: React.FC<FeaturedBlogPostsProps> = ({
  featuredBlogPosts,
}) => {
  const featuredPost = featuredBlogPosts.find(
    (post: IFeaturedBlogPost) => post.data.featuredPost === true
  );

  const allPostsMinusFeatured = featuredBlogPosts.filter(
    (post: IFeaturedBlogPost) => post.data.featuredPost === false
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <h2>Featured Blog Posts</h2>
        </div>
        <div className={styles.arrowContainer}>
          <SeeAll colour="#00FFFF" buttonText="View more" />
        </div>
      </div>
      <div className={styles.postsContainer}>
        <div className={styles.featuredPostContainer}>
          <FeaturedPost post={featuredPost as IFeaturedBlogPost} />
        </div>
        <div className={styles.postsGrid}>
          {allPostsMinusFeatured.map((post: IFeaturedBlogPost) => (
            <BlogPostCard key={post.data.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
