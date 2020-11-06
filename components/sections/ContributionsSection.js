import PropTypes from "prop-types";
import React from "react";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/ContributionsSection.module.css";
import Section from "../Section";
import WayToContribute from "../WayToContribute";

export default function ContributionsSection({ title, waysToContribute }) {
  return (
    <Section id={"contributions"} bgColor={"dark-light"}>
      <ContentLayout>
        <h2 className={"centered-text"}>{title}</h2>
        <div className={styles.contributionsGrid}>
          {waysToContribute.map((way) => (
            <WayToContribute key={way._key} way={way} />
          ))}
        </div>
      </ContentLayout>
    </Section>
  );
}

ContributionsSection.propTypes = {
  title: PropTypes.string.isRequired,
  waysToContribute: PropTypes.arrayOf(PropTypes.object).isRequired,
};
