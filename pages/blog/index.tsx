import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Blog } from "../../components/Containers/Blog/Posts/Blog";
import { SEO } from "../../components/SEO/SEO";
import { IPost } from "../../types/IBlog";
import { getMarkdownFrontMatter } from "../../utils/files";

interface BlogPageProps {
  posts: IPost[];
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | Perry Smith-Moss</title>
        <SEO />
      </Head>
      <Blog posts={posts} />
    </>
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
