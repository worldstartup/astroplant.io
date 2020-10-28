import PropTypes from "prop-types";
import React from "react";
import styles from "../modules/ArticleCard.module.css";
import Card from "./Card";

export default function ArticleCard({ article }) {
  return (
    <Card className={styles.card}>
      <img className={styles.cover} src={article.cover} />

      <div className={styles.content}>
        <p className={styles.date}>{article.date}</p>
        <b className={styles.title}>{article.title}</b>
        <div className={styles.readRow}>
          <p>Read</p>
          <p></p>
        </div>
      </div>
    </Card>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};
