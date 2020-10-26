import React from "react";
import { Button } from "../Button";
import Section from "../Section";
import styles from "../modules/JoinUsSection.module.css";

export default function JoinUsSection() {
  return (
    <Section id={"join_us"} bgColor={"dark-light"}>
      <h1>Join Us!</h1>
      <div className={styles.buttonRow}>
        <Button label="View Github" bgColor={"white"} color={"black"} />
        <Button label="Join the community" bgColor={"secondary"} />
      </div>
    </Section>
  );
}
