import type { GetStaticProps, NextPage } from "next";
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
      <SEO
        metaTitle="Blog | Perry Smith-Moss"
        metaDescription="Notes and tutorials from things I’ve built and learned, covering JavaScript, React, Node.js and CSS."
        canonicalLink="https://perrysmithmoss.com/blog"
        ogUrl="https://perrysmithmoss.com/blog"
      />
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
