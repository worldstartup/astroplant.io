import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/ContentLayout.module.css";

export default function ContentLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
