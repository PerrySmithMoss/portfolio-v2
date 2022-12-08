import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { SEO } from "../../components/SEO/SEO";
import { getFileBySlug, getFiles, getRecommendations } from "../../utils/files";

import { SnippetContainer } from "../../components/Containers/Snippet/Snippet/Snippet";
import { ISnippet } from "../../types/ISnippet";
import { IParams } from "../../types/IParams";

interface SnippetProps {
  frontMatter: ISnippet;
  mdxSource: string;
  recommendations: ISnippet[];
}

const Snippet: NextPage<SnippetProps> = ({
  mdxSource,
  frontMatter,
  recommendations,
}) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Perry Smith-Moss</title>
        <SEO />
      </Head>
      <SnippetContainer
        content={mdxSource}
        frontMatter={frontMatter}
        recommendations={recommendations}
      />
    </>
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

  const { frontMatter, mdxSource } = await getFileBySlug(
    "content/snippets",
    slug
  );

  const recommendations = await getRecommendations("content/snippets", slug);

  return {
    props: {
      mdxSource,
      frontMatter,
      recommendations
    },
  };
};
