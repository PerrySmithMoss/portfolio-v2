import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../../components/Navbar/Navbar";
import { SEO } from "../../components/SEO/SEO";
import { useGlobalUIContext } from "../../context/GlobalUI.context";
import styles from "../../styles/Home.module.scss";

import { getFileBySlug, getFiles, getRecommendations } from "../../utils/files";
import { IParams } from "../../types/IParams";
import { Footer } from "../../components/Footer/Footer";
import { PostContainer } from "../../components/Containers/Blog/Post/PostContainer";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPost } from "../../types/IBlog";
import { IHeading } from "../../types/IMedia";

interface BlogPostProps {
  slug: string;
  frontMatter: IPost;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  recommendations: IPost[];
  headings: IHeading[]
}

const BlogPost: NextPage<BlogPostProps> = ({
  slug,
  mdxSource,
  frontMatter,
  recommendations,
  headings
}) => {
  const { isMobileMenuDrawerOpen } = useGlobalUIContext();
  return (
    <div>
      <Head>
        <title>Perry Smith-Moss</title>
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
          <PostContainer
            content={mdxSource}
            frontMatter={frontMatter}
            recommendations={recommendations}
            headings={headings}
          />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getFiles("content/blog");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const { frontMatter, mdxSource, headings } = await getFileBySlug("content/blog", slug);


  const recommendations = await getRecommendations("content/blog", slug);

  return {
    props: {
      slug,
      mdxSource,
      frontMatter,
      recommendations,
      headings
    },
  };
};
