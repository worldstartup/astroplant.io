import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";
import styles from "../modules/GoalsSection.module.css";
import RichTextRenderer from "../RichTextRenderer";
import Section from "../Section";

export default function GoalsSection({ goals }) {
  return (
    <Section id={"presentation"} bgColor={"dark-light"}>
      <div className={styles.container}>
        <img src={goals.cover} className={styles.cover} />
        <div className={styles.contentContainer}>
          <h2>{goals.title}</h2>
          <RichTextRenderer
            richText={goals.content}
            className={styles.description}
          />
          <div className={styles.buttonRow}>
            <Button
              color={"dark"}
              bgColor={"light"}
              label="Join the team"
              className={styles.margin}
            />
            <Button label="Become a partner"></Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

GoalsSection.propTypes = {
  goals: PropTypes.object.isRequired,
};
