import PropTypes from "prop-types";
import React from "react";
import styles from "./modules/Feature.module.css";
import SanityImage from "./SanityImage";

export default function Feature({ feature }) {
  return (
    <div className={styles.container}>
      <SanityImage className={styles.icon} image={feature.icon} />
      <h3 className={"centered-text"}>{feature.name}</h3>
      <p className={styles.description}>{feature.description}</p>
    </div>
  );
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};
