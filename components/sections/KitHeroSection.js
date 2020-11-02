import React from "react";
import PropTypes from "prop-types";
import styles from "../modules/KitHeroSection.module.css";
import Section from "../Section";
import Button from "../Button";
import ContentLayout from "../layouts/ContentLayout";
import SectionDescription from "../SectionDescription";

export default function KitHeroSection({ title, description, image }) {
  return (
    <Section id="astroplant-kit" className={styles.section}>
      <ContentLayout>
        <div className={styles.contentGrid}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <SectionDescription text={description} color={"#000"} />
            <div className={styles.buttonRow}>
              <Button color={"light"} bgColor={"dark"} label={"Learn More"} />
              <Button label={"Join the waitlist"} />
            </div>
          </div>
          <img src={image} className={styles.highlightImage} />
        </div>
      </ContentLayout>
    </Section>
  );
}

KitHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
