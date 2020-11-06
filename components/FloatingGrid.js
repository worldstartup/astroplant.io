import PropTypes from "prop-types";
import React from "react";
import AnimateInView from "./AnimateInView";
import AnimateListInView from "./AnimateListInView";
import styles from "./modules/FloatingGrid.module.css";

export default function FloatingGrid({ children, floatingElement }) {
  return (
    <div className={styles.grid}>
      <div className={styles.content}>
        <AnimateListInView
          itemsAnimation={"fadeInBottom"}
          listAnimation={"list"}
          className={styles.content}
        >
          {children}
        </AnimateListInView>
      </div>
      <div className={styles.elementHolder}>
        <div className={styles.floatingElement}>
          <AnimateInView animation={"slideInLeft"}>
            {floatingElement}
          </AnimateInView>
        </div>
      </div>
    </div>
  );
}

FloatingGrid.propTypes = {
  children: PropTypes.node.isRequired,
  floatingElement: PropTypes.node.isRequired,
};
