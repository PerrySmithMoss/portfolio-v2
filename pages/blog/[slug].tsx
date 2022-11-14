import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { SEO } from "../../components/SEO/SEO";
import { getFileBySlug, getFiles, getRecommendations } from "../../utils/files";
import { IParams } from "../../types/IParams";
import { PostContainer } from "../../components/Containers/Blog/Post/PostContainer";
import { IPost } from "../../types/IBlog";
import { IHeading } from "../../types/IMedia";

interface BlogPostProps {
  slug: string;
  frontMatter: IPost;
  mdxSource: string;
  recommendations: IPost[];
  headings: IHeading[];
}

const BlogPost: NextPage<BlogPostProps> = ({
  slug,
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
  // const files = await getFiles("content/home/blog");
  const files = await getFiles("content/blog");

  // const files = featured.concat(other)

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

  const { frontMatter, mdxSource, headings } = await getFileBySlug(
    "content/blog",
    slug
  );

  const recommendations = await getRecommendations("content/blog", slug);

  return {
    props: {
      slug,
      mdxSource,
      frontMatter,
      recommendations,
      headings,
    },
  };
};
