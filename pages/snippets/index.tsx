import type { GetStaticProps, NextPage } from "next";
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
      <SEO
        metaTitle="Snippets | Perry Smith-Moss"
        metaDescription="Small pieces of code for everyday development tasks, including React hooks, pagination and page metadata."
        canonicalLink="https://perrysmithmoss.com/snippets"
        ogUrl="https://perrysmithmoss.com/snippets"
      />
      <Snippets snippets={snippets} tags={tags} />
    </>
  );
};

export default SnippetsPage;

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getMarkdownFrontMatter("snippets");

  // Gather all tags (removing duplicates)
  const tags = getTags(snippets as ISnippet[]);

  return {
    props: {
      snippets,
      tags,
    },
  };
};
