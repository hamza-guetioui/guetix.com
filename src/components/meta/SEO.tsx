import React from "react";
import Head from "next/head";
import SEO_DATA, { ISeo } from "@/data/SeoMetaData";

type Props = {
  children?: React.ReactNode;
  data?: ISeo;
  page?: keyof typeof SEO_DATA;
};

const SEO = ({ data, page, children }: Props) => {
  const seoMeta = data ?? (page ? SEO_DATA[page] : null);
  const openGraph = seoMeta?.openGraph;

  return (
    <Head>
      <title>{seoMeta?.title ?? "GUETIX"}</title>

      {seoMeta?.meta?.map((item) => {
        if ("charSet" in item) {
          return <meta key={item.charSet} charSet={item.charSet} />;
        }
        return (
          <meta
            key={item.name}
            name={item.name}
            content={item.content}
          />
        );
      })}

      {/* Open Graph */}
      {openGraph && (
        <>
          <meta property="og:type" content={openGraph.type} />
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:image" content={openGraph.image} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:site_name" content={openGraph.siteName} />
        </>
      )}

      {children}
    </Head>
  );
};

export default SEO;