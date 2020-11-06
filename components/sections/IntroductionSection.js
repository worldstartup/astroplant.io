import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/IntroductionSection.module.css";
import Section from "../Section";

export default function IntroductionSection({ title, introduction }) {
  return (
    <Section id={"introduction"}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.intro}>{introduction}</p>
    </Section>
  );
}

IntroductionSection.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
};
