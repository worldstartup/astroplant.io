import PropTypes from "prop-types";
import { imageUrlFor } from "../services/sanity";
import styles from "./modules/PartnersGrid.module.css";

export function PartnersGrid({ partnersLogo }) {
  return (
    <div className={styles.bar}>
      {partnersLogo.map((image) => (
        <img
          className={styles.supporter}
          key={image._key}
          src={imageUrlFor(image)}
        />
      ))}
    </div>
  );
}

PartnersGrid.propTypes = {
  partnersLogo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
