import React from "react";
import { IPost } from "../../../../types/IBlog";
import { Button } from "../../../Button/Button/Button";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import { BlogPostCard } from "./BlogPostCard";
import styles from "./FeaturedBlogPosts.module.scss";
import { FeaturedPost } from "./FeaturedPost";

interface FeaturedBlogPostsProps {
  featuredBlogPosts: IPost[];
}

export const FeaturedBlogPosts: React.FC<FeaturedBlogPostsProps> = ({
  featuredBlogPosts,
}) => {
  const featuredPost = featuredBlogPosts.find(
    (post: IPost) => post.featuredPost === true
  );

  const allPostsMinusFeatured = featuredBlogPosts.filter(
    (post: IPost) => post.featuredPost === false
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerBorderLeft}>
            <h2>Featured Blog Posts</h2>
          </div>
          {/* <div className={styles.arrowContainer}>
            <SeeAll colour="#00FFFF" buttonText="View more" />
          </div> */}
        </div>
        <div className={styles.postsContainer}>
          <div className={styles.postsWithFeature}>
            <div className={styles.featuredPostContainer}>
              <FeaturedPost post={featuredPost as IPost} />
            </div>
            <div className={styles.postsGrid}>
              {allPostsMinusFeatured.map((post: IPost) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <div className={styles.postsWithoutFeature}>
          <div className={styles.postsGrid}>
            {featuredBlogPosts.map((post: IPost) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          </div>
          <div className={styles.loadMoreButton}>
            <Button
              text="See more"
              variant="outline"
              colour="#00FFFF"
              // backgroundColour="rgb(40, 45, 65)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
