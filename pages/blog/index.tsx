import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Blog } from "../../components/Containers/Blog/Posts/Blog";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SEO } from "../../components/SEO/SEO";
import { useGlobalUIContext } from "../../context/GlobalUI.context";
import styles from "../../styles/Home.module.scss";
import { IPost } from "../../types/IBlog";
import { getMarkdownFrontMatter } from "../../utils/files";

interface BlogPageProps {
  featuredBlogPosts: IPost[];
  otherBlogPosts: IPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({
  featuredBlogPosts,
  otherBlogPosts,
}) => {
  const { isMobileMenuDrawerOpen } = useGlobalUIContext();
  return (
    <div>
      <Head>
        <title>Blog | Perry Smith-Moss</title>
        <SEO />
      </Head>

      <div className={styles.mainContainer}>
        <Navbar />
        <main
          className={
            isMobileMenuDrawerOpen
              ? `${styles.mainWrapperBlur} ${styles.mainWrapper}`
              : styles.mainWrapper
          }
        >
          <Blog
            featuredBlogPosts={featuredBlogPosts}
            otherBlogPosts={otherBlogPosts}
          />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const featuredBlogPosts = await getMarkdownFrontMatter("content/home/blog");
  const otherBlogPosts = await getMarkdownFrontMatter("content/blog");

  return {
    props: {
      featuredBlogPosts,
      otherBlogPosts,
    },
  };
};
