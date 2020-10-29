import React from "react";
import AlternativeLayout from "../../components/layouts/AlternativeLayout";
import PartnersGrid from "../../components/PartnersGrid";
import Section from "../../components/Section";
import TeamSection from "../../components/sections/TeamSection";
import { getFeaturedArticles } from "../../services/community-api";
import {
  getAboutUsContent,
  getCoreTeamMembers,
  getOtherTeamMembers,
  getPartners,
} from "../../services/sanity";

export default function AboutUs({
  data,
  coreTeamMembers,
  otherTeamMembers,
  partners,
  featuredArticles,
}) {
  return (
    <AlternativeLayout
      featuredArticles={featuredArticles}
      pageTitle={data.name}
      introduction={data.description}
    >
      <TeamSection
        coreTeamMembers={coreTeamMembers}
        otherTeamMembers={otherTeamMembers}
      />
      <Section id={"our-partners"}>
        <h2>Our Partners</h2>
        <PartnersGrid partners={partners} />
      </Section>
    </AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: await getAboutUsContent(),
      coreTeamMembers: await getCoreTeamMembers(),
      otherTeamMembers: await getOtherTeamMembers(),
      partners: await getPartners(),
      featuredArticles: await getFeaturedArticles(),
    },
    revalidate: 3000,
  };
}
