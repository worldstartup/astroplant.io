import React from "react";
import AlternativeLayout from "../components/layouts/AlternativeLayout";
import ContributionsSection from "../components/sections/ContributionsSection";
import RequirementSection from "../components/sections/RequirementSection";
import { getFeaturedArticles } from "../services/community-api";
import { getContributeContent } from "../services/sanity";

export default function Contribute({ data, featuredArticles }) {
  return (
    <AlternativeLayout
      featuredArticles={featuredArticles}
      pageTitle={data.name}
      introduction={data.description}
    >
      <ContributionsSection
        title={data.waysToContributeSectionTitle}
        waysToContribute={data.waysToContribute}
      />
      <RequirementSection
        title={data.requirementSectionTitle}
        description={data.requirementDescription}
      />
    </AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: await getContributeContent(),
      featuredArticles: await getFeaturedArticles(),
    },
    revalidate: 3000,
  };
}
