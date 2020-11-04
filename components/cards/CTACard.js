import PropTypes from "prop-types";
import styles from "../modules/CTACard.module.css";
import SanityImage from "../SanityImage";
import Card from "./Card";

export default function CTACard({ cover, title, description, children }) {
  return (
    <Card>
      <SanityImage className={styles.cover} image={cover} params={{ h: 400 }} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
    </Card>
  );
}

CTACard.propTypes = {
  cover: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
