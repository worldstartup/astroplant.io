import PropTypes from "prop-types";
import React from "react";
import styles from "./modules/Section.module.css";

export default function Section({ id, bgColor, className, children }) {
  return (
    <section id={id} className={`${styles.section} bg-${bgColor} ${className}`}>
      {children}
    </section>
  );
}

Section.propTypes = {
  /**
   * Id of the section
   */
  id: PropTypes.string.isRequired,
  /**
   * Background color
   */
  bgColor: PropTypes.string,
};

Section.defaultProps = {
  bgColor: "transparent",
};
