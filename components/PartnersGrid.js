import PropTypes from "prop-types";
import styles from "./modules/PartnersGrid.module.css";

export function PartnersGrid({ partners }) {
  return (
    <div className={styles.bar}>
      {partners.map((partner) => (
        <img
          className={styles.supporter}
          key={partner._id}
          src={partner.logo}
        />
      ))}
    </div>
  );
}

PartnersGrid.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.object).isRequired,
};
