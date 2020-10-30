import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./modules/Carousel.module.css";

export default function Carousel({ content }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(function () {
      if (activeIndex < content.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className={styles.container}>
      <img src={content[activeIndex].cover} className={styles.cover} />
      <div className={styles.content}>
        <h2>{content[activeIndex].title}</h2>
        <p className={styles.description}>{content[activeIndex].description}</p>
        <div className={styles.indicators}>
          {content.map((el, index) => {
            const active = index === activeIndex;

            return (
              <span
                key={el._id}
                className={`${styles.circle} ${active && styles.active}`}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  /**
   * Array of object containing an image, a title, and a description
   */
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
