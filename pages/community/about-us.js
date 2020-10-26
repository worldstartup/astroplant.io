import React from "react";
import AlternativeLayout from "../../components/layouts/AlternativeLayout";
import { getAboutUsContent } from "../../services/sanity";

export default function AboutUs({ data }) {
  return (
    <AlternativeLayout
      pageTitle={data.name}
      introduction={data.description}
    ></AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: { data: getAboutUsContent() },
  };
}
