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
  posts: IPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({
  posts,
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
            posts={posts}
          />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getMarkdownFrontMatter("content/blog");

  return {
    props: {
      posts,
    },
  };
};
