import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export default function MainLayout({
  children,
  pageName,
  pageDescription,
  featuredArticles,
}) {
  const router = useRouter();

  const publicUrl = `https://astroplant.io`;
  const fullUrl = `${publicUrl}${router.asPath}`;

  const fullTitle = `${pageName} | Astroplant`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="title" content={fullTitle} />
        <meta name="description" content={pageDescription || ""} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={pageDescription || ""} />
        <meta property="og:image" content="/images/meta-image" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={fullUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={pageDescription || ""} />
        <meta property="twitter:image" content="/images/meta-image" />
      </Head>

      <Header featuredArticles={featuredArticles} />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
  pageDescription: PropTypes.string.isRequired,
  featuredArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
