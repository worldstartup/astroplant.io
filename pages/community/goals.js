import React from "react";
import AlternativeLayout from "../../components/layouts/AlternativeLayout";
import { getGoalsContent } from "../../services/sanity";

export default function Goals({ data }) {
  return (
    <AlternativeLayout
      pageTitle={data.name}
      introduction={data.description}
    ></AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: { data: getGoalsContent() },
  };
}
