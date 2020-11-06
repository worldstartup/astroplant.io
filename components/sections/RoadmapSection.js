import PropTypes from "prop-types";
import React from "react";
import Milestone from "../Milestone";
import styles from "../modules/RoadmapSection.module.css";
import Section from "../Section";

export default function RoadmapSection({ milestones }) {
  return (
    <Section id={"roadmap"}>
      <h2 className={styles.title}>Roadmap</h2>
      {milestones.map((milestone) => (
        <Milestone key={milestone._id} milestone={milestone} />
      ))}
    </Section>
  );
}

RoadmapSection.propTypes = {
  milestones: PropTypes.arrayOf(PropTypes.object).isRequired,
};
