import PropTypes from "prop-types";
import React from "react";
import styles from "./modules/FloatingGrid.module.css";

export default function FloatingGrid({ children, floatingElement }) {
  return (
    <div className={styles.grid}>
      <div className={styles.content}>{children}</div>
      <div className={styles.elementHolder}>
        <div className={styles.floatingElement}>{floatingElement}</div>
      </div>
    </div>
  );
}

FloatingGrid.propTypes = {
  children: PropTypes.node.isRequired,
  floatingElement: PropTypes.node.isRequired,
};
