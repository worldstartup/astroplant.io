import React from "react";
import PropTypes from "prop-types";
import Section from "../Section";
import RichTextRenderer from "../RichTextRenderer";
import styles from "../modules/RequirementSection.module.css";

export default function RequirementSection({ title, description }) {
  return (
    <Section id="requirements">
      <h2 className={styles.title}>{title}</h2>
      <RichTextRenderer richText={description} className={styles.description} />
    </Section>
  );
}

RequirementSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
};
