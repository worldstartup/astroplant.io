import PropTypes from "prop-types";
import React from "react";
import styles from "./modules/DropdownMenu.module.css";

export default function DropdownMenu({ visible, children }) {
  return (
    <div
      className={`${styles.holder} ${
        visible ? styles["visible"] : styles["hidden"]
      }`}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}

DropdownMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
