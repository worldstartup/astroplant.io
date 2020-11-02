import PropTypes from "prop-types";
import React from "react";
import Feature from "../Feature";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/FeaturesSection.module.css";
import Section from "../Section";

export default function FeaturesSection({ features }) {
  return (
    <Section id={"features"}>
      <ContentLayout>
        <h2 className={"centered-text"}>The best way to contribute</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <Feature key={feature._key} feature={feature} />
          ))}
        </div>
      </ContentLayout>
    </Section>
  );
}

FeaturesSection.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};
