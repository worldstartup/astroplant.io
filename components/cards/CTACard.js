import PropTypes from "prop-types";
import styles from "../modules/CTACard.module.css";
import Card from "./Card";

export default function CTACard({ cover, title, description, children }) {
  return (
    <Card>
      <img className={styles.cover} src={cover} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
    </Card>
  );
}

CTACard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
