import React from "react";
import Image from "next/image";
import { IFeaturedBlogPost } from "../../../types/IBlog";
import styles from "./Blog.module.scss";
import { Badge } from "../../Badge/Badge";
import { FeaturedPost } from "./FeaturedPost";

interface BlogProps {
  featuredBlogPosts: IFeaturedBlogPost[];
  otherBlogPosts: IFeaturedBlogPost[];
}

export const Blog: React.FC<BlogProps> = ({
  featuredBlogPosts,
  otherBlogPosts,
}) => {
  const featuredPost = featuredBlogPosts.find(
    (post: IFeaturedBlogPost) => post.data.featuredPost === true
  );

  const allPostsMinusFeatured = featuredBlogPosts.filter(
    (post: IFeaturedBlogPost) => post.data.featuredPost === false
  );
  return (
    <section className={styles.blogWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerBorderLeft}>
          <h1>Latest Posts</h1>
        </div>
        <div className={styles.featuredPostsGrid}>
          <FeaturedPost post={featuredPost as IFeaturedBlogPost} />
          <div className={styles.otherPostsContainer}>
            {allPostsMinusFeatured.map(
              (post: IFeaturedBlogPost) => (
                <article key={post.data.id}  className={styles.post}>
                  <Image
                    height={300}
                    width={400}
                    objectFit="cover"
                    className={styles.image}
                    src={post.data.image}
                    alt={post.data.title}
                  />

                  <div className={styles.postContent}>
                    <div className={styles.badgeWrapper}>
                      <Badge
                        colour="rgb(34, 139, 230)"
                        backgroundColour="#0c2231"
                        text={post.data.tech[0]}
                        size="md"
                      />
                    </div>
                    <div>
                      <h3>{post.data.title}</h3>
                    </div>
                    <div>
                      <p>{post.data.description}</p>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
        <div className={styles.featuredPostsMobile}>
          <article className={styles.featuredPost}>
            <Image
              // layout="fill"
              height={400}
              width={900}
              objectFit="cover"
              src={featuredPost!.data.image}
              alt={featuredPost!.data.title}
            />
            <div className={styles.badgeWrapper}>
              <Badge
                colour="rgb(34, 139, 230)"
                backgroundColour="#0c2231"
                text={featuredPost!.data.tech[0]}
                size="lg"
              />
            </div>
            <div>
              <h2>{featuredPost!.data.title}</h2>
            </div>
            <div>
              <p>{featuredPost!.data.description}</p>
            </div>
          </article>
          {allPostsMinusFeatured.map(
            (post: IFeaturedBlogPost) => (
              <article key={post.data.id} className={styles.post}>
                <Image
                  height={200}
                  width={300}
                  objectFit="cover"
                  className={styles.image}
                  src={post.data.image}
                  alt={post.data.title}
                />
                <div className={styles.postContent}>
                  <div className={styles.badgeWrapper}>
                    <Badge
                      colour="rgb(34, 139, 230)"
                      backgroundColour="#0c2231"
                      text={post.data.tech[0]}
                      size="md"
                    />
                  </div>
                  <div>
                    <h3>{post.data.title}</h3>
                  </div>
                  <div>
                    <p>{post.data.description}</p>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
        {/* <hr /> */}
        <div className={styles.allPostsGrid}>
          {otherBlogPosts.map((post: IFeaturedBlogPost) => (
            <article key={post.data.id}  className={styles.otherPost}>
              <Image
                height={400}
                width={750}
                objectFit="cover"
                className={styles.image}
                src={post.data.image}
                alt={post.data.title}
              />

              <div>
                <div className={styles.badgeWrapper}>
                  <Badge
                    colour="rgb(34, 139, 230)"
                    backgroundColour="#0c2231"
                    text={post.data.tech[0]}
                    size="md"
                  />
                </div>
                <div>
                  <h3>{post.data.title}</h3>
                </div>
                <div>
                  <p>{post.data.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
