import styles from "./modules/Feature.module.css";
import React from "react";
import PropTypes from "prop-types";

export default function Feature({ feature }) {
  return (
    <div className={styles.container}>
      <img src={feature.icon} />
      <h3>{feature.name}</h3>
      <p>{feature.description}</p>
    </div>
  );
}

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};
