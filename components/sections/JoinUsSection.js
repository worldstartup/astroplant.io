import React from "react";
import GithubButton from "../GithubButton";
import JoinCommunityButton from "../JoinCommunityButton";
import styles from "../modules/JoinUsSection.module.css";
import Section from "../Section";

export default function JoinUsSection() {
  return (
    <Section id={"join_us"} bgColor={"dark-light"}>
      <h1 className={styles.title}>Join Us!</h1>
      <div className={styles.buttonRow}>
        <GithubButton />
        <JoinCommunityButton />
      </div>
    </Section>
  );
}
