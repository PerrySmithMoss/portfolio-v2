---
id: "3"
title: "Next.js Pages Router SEO component"
excerpt: "A reusable component for page titles, descriptions and social sharing metadata in the Next.js Pages Router."
thumbnail: "/assets/images/home/snippets/debounce.png"
slug: "nextjs-seo-component"
tags: ["TypeScript", "Next.js"]
tech: ["nextjs", "typescript"]
---

## Next.js Pages Router SEO component

```jsx
interface SEOProps {
  // Meta tags
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  metaRobots: string; // FOLLOW, INDEX, NOFOLLOW, NOINDEX
  canonicalLink: string;
  // Social media tags
  ogUrl: string;
  ogImage: string;
  ogType:
    | "website"
    | "article.group"
    | "article"
    | "product"
    | "product.group"
    | "product.item"
    | "profile";
}

export const SEO: React.FC<SEOProps> = ({
  metaTitle,
  metaDescription,
  metaKeywords,
  metaRobots,
  ogType,
  canonicalLink,

  ogUrl,
  ogImage,
}) => {
  return (
    <>
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
      <meta property="og:site_name" content="Meadow Vale Foods" />
      <meta property="og:locale" content="en_GB" />
    </>
  );
};
```

## Usage

```jsx
<Head>
  <title>Login | Meadow Vale Foods</title>
  <SEO
    metaTitle={"Meadow Vale Foods - Your Partners in Poultry"}
    metaDescription={
      "Meadow Vale Foods is a leading supplier of processed poultry products to both the retail-grocery and foodservice sectors."
    }
    metaKeywords={
      "Chicken, Poultry, Cooked Chicken, Leading Supplier, Retail Grocery, Foodservice"
    }
    metaRobots={"INDEX,FOLLOW"}
    canonicalLink={`${process.env.NEXT_PUBLIC_ROOT_URL}/`}
    ogUrl={`${process.env.NEXT_PUBLIC_ROOT_URL}/`}
    ogImage={"/favicon.ico"}
    ogType={"website"}
  />
</Head>
```
