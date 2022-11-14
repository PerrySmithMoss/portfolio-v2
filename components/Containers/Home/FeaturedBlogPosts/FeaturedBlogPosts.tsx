import React from "react";
import { IPost } from "../../../../types/IBlog";
import { Button } from "../../../Button/Button/Button";
import { BlogPostCard } from "./BlogPostCard";
import styles from "./FeaturedBlogPosts.module.scss";
import { FeaturedPost } from "./FeaturedPost";
import { motion as m } from "framer-motion";

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
      <m.div className={styles.container}
          initial={"offscreen"}
          variants={{
            offscreen: {
              y: 50,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
            },
          }}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.header}>
          <div className={styles.headerBorderLeft}>
            <h2>Featured Posts</h2>
          </div>
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
              size="lg"
              colour="#00FFFF"
              link="/blog"
              // backgroundColour="rgb(40, 45, 65)"
            />
          </div>
        </div>
      </m.div>
    </section>
  );
};
