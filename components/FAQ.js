import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Arrow from "../public/icons/arrow-down.svg";
import Card from "./cards/Card";
import styles from "./modules/FAQ.module.css";

export default function FAQ({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className={styles.card}>
      <div
        className={`${styles.questionRow} ${open ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
      >
        <ReactMarkdown source={faq.question} />
        <Arrow
          className={`${styles.dropdown} ${open ? styles.rotate : ""}`}
          color={open ? "primary" : "light"}
        />
      </div>
      <div className={`${styles.answerRow} ${open ? styles.visible : ""}`}>
        <ReactMarkdown source={faq.answer} className={styles.md} />
      </div>
    </Card>
  );
}

FAQ.propTypes = {
  faq: PropTypes.object.isRequired,
};
