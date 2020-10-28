import React from "react";
import AlternativeLayout from "../../components/layouts/AlternativeLayout";
import GoalsSection from "../../components/sections/GoalsSection";
import RoadmapSection from "../../components/sections/RoadmapSection";
import { getGoalsContent, getMilestones } from "../../services/sanity";

export default function Goals({ data, milestones }) {
  return (
    <AlternativeLayout pageTitle={data.name} introduction={data.description}>
      <GoalsSection goals={data.goals} />
      <RoadmapSection milestones={milestones} />
    </AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: { data: await getGoalsContent(), milestones: await getMilestones() },
  };
}
