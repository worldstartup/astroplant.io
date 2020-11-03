import { compareAsc, format } from "date-fns";
import PropTypes from "prop-types";
import React from "react";
import styles from "./modules/Milestone.module.css";
import SanityImage from "./SanityImage";

export default function Milestone({ milestone }) {
  let date = new Date(milestone.date);
  let now = new Date();
  let future = compareAsc(now, date) === -1;

  return (
    <div className={styles.holder}>
      <div className={`${styles.line} ${future && styles["bg-blue"]}`}>
        <div className={`${styles.circle} ${future && styles["bg-blue"]}`} />
      </div>
      <div>
        <p className={`${styles.date} ${future && styles["blue"]}`}>
          {format(date, "MMMM yyyy")}
        </p>

        <div className={styles.container}>
          <SanityImage
            params={{ "max-w": 512 }}
            src={milestone.cover}
            className={styles.cover}
          />
          <div className={styles.content}>
            <h3>{milestone.title}</h3>
            <p className={styles.description}>{milestone.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Milestone.propTypes = {
  milestone: PropTypes.object.isRequired,
};
