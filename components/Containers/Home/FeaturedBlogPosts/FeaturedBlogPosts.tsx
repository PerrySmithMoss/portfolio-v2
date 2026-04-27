import { motion as m } from "framer-motion";
import React from "react";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { IPost } from "../../../../types/IBlog";
import { Button } from "../../../Button/Button/Button";
import { BlogPostCard } from "./BlogPostCard";
import styles from "./FeaturedBlogPosts.module.scss";
import { FeaturedPost } from "./FeaturedPost";

interface FeaturedBlogPostsProps {
  featuredBlogPosts: IPost[];
}

export const FeaturedBlogPosts: React.FC<FeaturedBlogPostsProps> = ({ featuredBlogPosts }) => {
  const matches = useMediaQuery(875);

  const featuredPost = featuredBlogPosts.find((post) => post.featuredPost);
  const remainingPosts = featuredBlogPosts.filter((post) => !post.featuredPost);

  return (
    <section className={styles.wrapper}>
      <m.div
        className={styles.container}
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
          {!matches && featuredPost ? (
            <div className={styles.postsWithFeature}>
              <FeaturedPost post={featuredPost} />
              <div className={styles.postsGrid}>
                {remainingPosts.slice(0, 3).map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {featuredBlogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div className={styles.loadMoreButton}>
            <Button text="See more" variant="outline" size="lg" link="/blog" />
          </div>
        </div>
      </m.div>
    </section>
  );
};
