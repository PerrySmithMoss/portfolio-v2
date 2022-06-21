import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Blog } from "../../components/Containers/Blog/Posts/Blog";
import { Snippets } from "../../components/Containers/Snippet/Snippets/Snippets";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SEO } from "../../components/SEO/SEO";
import { useGlobalUIContext } from "../../context/GlobalUI.context";
import styles from "../../styles/Home.module.scss";
import { ISnippet } from "../../types/ISnippet";
import { getMarkdownFrontMatter } from "../../utils/files";
import { getTags } from "../../utils/tags";

interface SnippetsPageProps {
  snippets: ISnippet[];
  tags: string[];
}

const SnippetsPage: NextPage<SnippetsPageProps> = ({ snippets, tags }) => {
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
          <Snippets snippets={snippets} tags={tags} />
          <Footer />
        </main>
      </div>
    </div>
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
