import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/GoalsSection.module.css";
import RichTextRenderer from "../RichTextRenderer";
import SanityImage from "../SanityImage";
import SanityLinkList from "../SanityLinkList";
import Section from "../Section";

export default function GoalsSection({ goals }) {
  return (
    <Section id={"presentation"} bgColor={"dark-light"}>
      <div className={styles.container}>
        <SanityImage
          params={{ "max-h": 800 }}
          src={goals.cover}
          className={styles.cover}
        />
        <div className={styles.contentContainer}>
          <h2>{goals.title}</h2>
          <RichTextRenderer
            richText={goals.content}
            className={styles.description}
          />
          <SanityLinkList links={goals.links} />
        </div>
      </div>
    </Section>
  );
}

GoalsSection.propTypes = {
  goals: PropTypes.object.isRequired,
};
