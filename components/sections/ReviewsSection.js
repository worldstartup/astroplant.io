import PropTypes from "prop-types";
import React from "react";
import ReviewCard from "../cards/ReviewCard";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/ReviewsSection.module.css";
import Section from "../Section";

export default function ReviewsSection({ reviews }) {
  return (
    <Section id={"components"} bgColor={"dark-light"}>
      <ContentLayout>
        <h2 className={"centered-text"}>They already own the kit</h2>
        <div className={styles.cardGrid}>
          {reviews.map((review) => (
            <ReviewCard key={review._key} review={review} />
          ))}
        </div>
        <div className={styles.mapLinkHolder}>
          <a
            target={"blank"}
            referrerPolicy={"no-referrer"}
            href={"https://app.astroplant.sda-projects.nl/map"}
            className={styles.mapLink}
          >
            See what other users are doing
          </a>
        </div>
      </ContentLayout>
    </Section>
  );
}

ReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
