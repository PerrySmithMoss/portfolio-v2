import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SEO } from "../../components/SEO/SEO";
import { useGlobalUIContext } from "../../context/GlobalUI.context";
import styles from "../../styles/Home.module.scss";
import { getFileBySlug, getFiles, getRecommendations } from "../../utils/files";

import { SnippetContainer } from "../../components/Containers/Snippet/Snippet/Snippet";
import { ISnippet } from "../../types/ISnippet";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { IParams } from "../../types/IParams";

interface SnippetProps {
  slug: string;
  frontMatter: ISnippet;
  mdxSource:  MDXRemoteSerializeResult<Record<string, unknown>>;
  recommendations: ISnippet[]
}

const Snippet: NextPage<SnippetProps> = ({ slug, mdxSource, frontMatter, recommendations }) => {
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
          <SnippetContainer content={mdxSource} frontMatter={frontMatter} recommendations={recommendations}  />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Snippet;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getFiles("content/snippets");

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

  const {frontMatter, mdxSource} = await getFileBySlug('content/snippets', slug)

  const recommendations = await getRecommendations('content/snippets', slug);

  return {
    props: {
      slug,
      mdxSource,
      frontMatter,
      recommendations
    },
  };
};
