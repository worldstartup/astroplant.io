import React from "react";
import AlternativeLayout from "../components/layouts/AlternativeLayout";
import { getContributeContent } from "../services/sanity";

export default function Contribute({ data }) {
  return (
    <AlternativeLayout
      pageTitle={data.name}
      introduction={data.description}
    ></AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: { data: await getContributeContent() },
  };
}
