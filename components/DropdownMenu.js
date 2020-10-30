import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import styles from "./modules/DropdownMenu.module.css";

export default function DropdownMenu({ name, trigger, children, ...props }) {
  const [show, setShow] = useState(false);

  const ref = useRef(null);
  const triggerRef = useRef(null);

  useOutsideClick(ref, triggerRef, close.bind(this));

  function toggle() {
    setShow(!show);
  }

  function close() {
    setShow(false);
  }

  return (
    <div>
      <div
        className={styles.triggerHolder}
        id={`${name}button`}
        aria-haspopup="true"
        aria-controls={`${name}menu`}
        ref={triggerRef}
        onClick={() => toggle()}
      >
        {trigger}
      </div>
      <div
        className={styles.menuHolder}
        id={`${name}menu`}
        role="menu"
        aria-labelledby={`${name}button`}
        tabIndex="-1"
      >
        <div
          className={`${styles.holder} ${show ? styles["visible"] : ""}`}
          ref={ref}
          {...props}
        >
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
}

DropdownMenu.propTypes = {
  /**
   * Content to be displayed inside the menu
   */
  children: PropTypes.node.isRequired,
  /**
   * Name of the menu (used for accessibility)
   */
  name: PropTypes.string.isRequired,
  /**
   * Component that triggers the opening of the menu
   */
  trigger: PropTypes.node.isRequired,
};
