import React from "react";
import Head from "next/head";

interface SEOProps {
  // Meta tags
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaRobots?: string; // FOLLOW, INDEX, NOFOLLOW, NOINDEX
  canonicalLink?: string;
  // Social media tags
  ogUrl?: string;
  ogImage?: string;
  ogType?:
    | "website"
    | "article.group"
    | "article"
    | "product"
    | "product.group"
    | "product.item"
    | "profile";
}

export const SEO: React.FC<SEOProps> = ({
  metaTitle = "Perry Smith-Moss",
  metaDescription = "Perry Smith-Moss is a software engineer who specializes in solving business problems with the best suited technology.",
  metaKeywords = "perrysmithmoss, Perry Smith-Moss, Web Developer, Software Developer, Software Engineer, Web Development, Developer Portfolio, Portfolio",
  metaRobots = "FOLLOW,INDEX",
  ogType = "website",
  canonicalLink = "https://perrysmithmoss.com",
  ogUrl = "https://perrysmithmoss.com",
  ogImage = "/favicon.ico",
}) => {
  return (
    <Head>
      <html lang="en" />
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />

      <link rel="canonical" href={canonicalLink} />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Perry Smith-Moss" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Perry Smith-Moss" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogUrl} />
    </Head>
  );
};
