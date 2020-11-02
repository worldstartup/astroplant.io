import PropTypes from "prop-types";
import React from "react";
import FAQ from "../FAQ";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/FAQSection.module.css";
import Section from "../Section";

export default function FAQSection({ faqs }) {
  let leftQuestions = [];
  let rightQuestions = [];

  for (let i = 0; i < faqs.length; i++) {
    if (i < faqs.length / 2) {
      leftQuestions.push(faqs[i]);
    } else {
      rightQuestions.push(faqs[i]);
    }
  }

  return (
    <Section id={"components"}>
      <ContentLayout>
        <h2 className={"centered-text"}>FAQ</h2>
        <div className={styles.cardGrid}>
          <div className={styles.column}>
            {leftQuestions.map((faq) => (
              <FAQ key={faq.id} faq={faq} />
            ))}
          </div>
          <div className={styles.column}>
            {rightQuestions.map((faq) => (
              <FAQ key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </ContentLayout>
    </Section>
  );
}

FAQSection.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
