import React from "react";
import Image from "next/image";
import { IPost } from "../../../../types/IBlog";
import styles from "./Blog.module.scss";
import { Badge } from "../../../Badge/Badge";
import { FeaturedPost } from "./FeaturedPost";
import Link from "next/link";

interface BlogProps {
  featuredBlogPosts: IPost[];
  otherBlogPosts: IPost[];
}

export const Blog: React.FC<BlogProps> = ({
  featuredBlogPosts,
  otherBlogPosts,
}) => {
  const featuredPost = featuredBlogPosts.find(
    (post: IPost) => post.featuredPost === true
  );

  const allPostsMinusFeatured = featuredBlogPosts.filter(
    (post: IPost) => post.featuredPost === false
  );

  const allPosts = featuredBlogPosts.concat(otherBlogPosts);

  return (
    <section className={styles.blogWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.headerBorderLeft}>
          <h1>Latest Posts</h1>
        </div>
        {/* <div className={styles.featuredPostsGrid}>
          <FeaturedPost post={featuredPost as IPost} />
          <div className={styles.otherPostsContainer}>
            {allPostsMinusFeatured.map((post: IPost) => (
              <article key={post.id} className={styles.post}>
                <div
                  className={styles.smallImageContainer}
                >
                <Image
                  // height={300}
                  // width={400}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                  src={post.image}
                  alt={post.title}
                />

                </div>
                <div className={styles.postContent}>
                  <div className={styles.badgeWrapper}>
                    <Badge
                      colour="rgb(34, 139, 230)"
                      backgroundColour="#0c2231"
                      text={post.tech[0]}
                      size="md"
                    />
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <div>
                      <h3>{post.title}</h3>
                    </div>
                  </Link>
                  <div>
                    <p>{post.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div> */}
        {/* <div className={styles.featuredPostsMobile}>
          <article className={styles.featuredPost}>
            <Image
              // layout="fill"
              height={400}
              width={900}
              objectFit="cover"
              src={featuredPost!.image}
              alt={featuredPost!.title}
            />
            <div className={styles.badgeWrapper}>
              <Badge
                colour="rgb(34, 139, 230)"
                backgroundColour="#0c2231"
                text={featuredPost!.tech[0]}
                size="lg"
              />
            </div>
            <Link href={`/blog/${featuredPost!.slug}`}>
              <div>
                <h2>{featuredPost!.title}</h2>
              </div>
            </Link>
            <div>
              <p>{featuredPost!.description}</p>
            </div>
          </article>
          {allPostsMinusFeatured.map((post: IPost) => (
            <article key={post.id} className={styles.post}>
              <div className={styles.postImageContainer}>
                <Image
                  height={200}
                  width={300}
                  // layout="fill"
                  objectFit="cover"
                  className={styles.image}
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.badgeWrapper}>
                  <Badge
                    colour="rgb(34, 139, 230)"
                    backgroundColour="#0c2231"
                    text={post.tech[0]}
                    size="md"
                  />
                </div>
                <Link href={`/blog/${post!.slug}`}>
                  <div>
                    <h3>{post.title}</h3>
                  </div>
                </Link>
                <div>
                  <p>{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div> */}
        <div className={styles.allPostsGrid}>
          {allPosts.map((post: IPost) => (
            <article key={post.id} className={styles.otherPost}>
              <Image
                height={500}
                width={750}
                objectFit="cover"
                className={styles.image}
                src={post.image}
                alt={post.title}
              />

              <div>
                <div className={styles.badgeWrapper}>
                  <Badge
                    colour="rgb(34, 139, 230)"
                    backgroundColour="#0c2231"
                    text={post.tech[0]}
                    size="md"
                  />
                </div>
                <Link href={`/blog/${post!.slug}`}>
                  <div>
                    <h3>{post.title}</h3>
                  </div>
                </Link>
                <div>
                  <p>{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
