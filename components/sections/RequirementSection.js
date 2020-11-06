import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/RequirementSection.module.css";
import RichTextRenderer from "../RichTextRenderer";
import Section from "../Section";

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
