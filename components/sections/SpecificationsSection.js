import PropTypes from "prop-types";
import React from "react";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/SpecificationsSection.module.css";
import Section from "../Section";

export default function SpecificationsSection({ specs }) {
  return (
    <Section id={"components"}>
      <ContentLayout>
        <h2 className={"centered-text"}>Specification</h2>
        <div className={styles.componentsGrid}>
          <table cellPadding={0} cellSpacing={0} className={styles.specTable}>
            <tbody>
              {specs.map((spec) => (
                <tr key={spec._key} className={styles.componentsContainer}>
                  <td className={styles.specName}>{spec.name}</td>
                  <td>
                    <p>
                      {spec.value} {spec.unit}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentLayout>
    </Section>
  );
}

SpecificationsSection.propTypes = {
  specs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
