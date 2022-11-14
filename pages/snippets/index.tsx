import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Snippets } from "../../components/Containers/Snippet/Snippets/Snippets";
import { SEO } from "../../components/SEO/SEO";
import { ISnippet } from "../../types/ISnippet";
import { getMarkdownFrontMatter } from "../../utils/files";
import { getTags } from "../../utils/tags";

interface SnippetsPageProps {
  snippets: ISnippet[];
  tags: string[];
}

const SnippetsPage: NextPage<SnippetsPageProps> = ({ snippets, tags }) => {
  return (
    <>
      <Head>
        <title>Snippets | Perry Smith-Moss</title>
        <SEO />
      </Head>
      <Snippets snippets={snippets} tags={tags} />
    </>
  );
};

export default SnippetsPage;

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getMarkdownFrontMatter("content/snippets");

  // Gather all tags (removing duplicates)
  const tags = getTags(snippets as ISnippet[]);

  return {
    props: {
      snippets,
      tags,
    },
  };
};
