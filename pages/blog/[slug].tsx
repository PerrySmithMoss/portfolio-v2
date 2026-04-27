import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { PostContainer } from "../../components/Containers/Blog/Post/PostContainer";
import { SEO } from "../../components/SEO/SEO";
import { IPost } from "../../types/IBlog";
import { IHeading } from "../../types/IMedia";
import { IParams } from "../../types/IParams";
import { getFileBySlug, getFiles, getRecommendations } from "../../utils/files";

interface BlogPostProps {
  frontMatter: IPost;
  mdxSource: string;
  recommendations: IPost[];
  headings: IHeading[];
}

const BlogPost: NextPage<BlogPostProps> = ({
  mdxSource,
  frontMatter,
  recommendations,
  headings,
}) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Perry Smith-Moss</title>
        <SEO />
      </Head>
      <PostContainer
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        recommendations={recommendations}
        headings={headings}
      />
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getFiles("content/blog");

  const paths = files
    .filter((path) => /\.mdx?$/.test(path))
    .map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx?$/, ""),
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
      mdxSource,
      frontMatter,
      recommendations,
      headings,
    },
  };
};
