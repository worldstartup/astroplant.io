import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./modules/DropdownMenu.module.css";

export default function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.holder}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
};
