import Head from "next/head";
import React from "react";

interface SEOProps {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaRobots?: string;
  canonicalLink?: string;
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
  metaTitle = "Perry Smith-Moss | Software engineer",
  metaDescription = "I’m Perry Smith-Moss, a software engineer building Vordian, a tool for fitness coaches. Explore my projects, experience and writing.",
  metaKeywords = "perrysmithmoss, Perry Smith-Moss, Web Developer, Software Developer, Software Engineer, Web Development, Developer Portfolio, Portfolio",
  metaRobots = "index, follow",
  ogType = "website",
  canonicalLink = "https://perrysmithmoss.com",
  ogUrl = "https://perrysmithmoss.com",
  ogImage = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />

      <link rel="canonical" href={canonicalLink} />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Perry Smith-Moss" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@PerrySmithMoss" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
