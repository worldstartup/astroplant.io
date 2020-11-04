import PropTypes from "prop-types";
import React from "react";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/ComponentsSection.module.css";
import SanityImage from "../SanityImage";
import Section from "../Section";

export default function ComponentsSection({ components }) {
  return (
    <Section id={"components"} bgColor={"dark-light"}>
      <ContentLayout>
        <h2 className={"centered-text"}>Components</h2>
        <div className={styles.componentsGrid}>
          {components.map((component) => (
            <div key={component._key} className={styles.componentsContainer}>
              <SanityImage
                params={{ h: 256 }}
                className={styles.componentsCover}
                src={component.picture}
              />
              <b className={"centered_text"}>{component.name}</b>
            </div>
          ))}
        </div>
      </ContentLayout>
    </Section>
  );
}

ComponentsSection.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired,
};
