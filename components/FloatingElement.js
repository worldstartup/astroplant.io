import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from "./modules/FloatingElement.module.css";

export default function FloatingElement({ id, children, percentageHidden }) {
  useEffect(() => {
    // define and assign a function to the hero top padding
    const setPosition = () => {
      const element = document.getElementById(id);
      const objectWidth = element.offsetWidth;
      const hiddenWidth = (percentageHidden / 100) * objectWidth;

      element.style.right = `-${hiddenWidth}px`;
    };

    setPosition();
  });

  return (
    <div id={id} className={styles.floating}>
      {children}
    </div>
  );
}

FloatingElement.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  percentageHidden: PropTypes.number,
};

FloatingElement.defaultProps = {
  percentageHidden: 33,
};
