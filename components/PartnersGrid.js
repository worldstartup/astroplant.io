import PropTypes from "prop-types";
import styles from "./modules/PartnersGrid.module.css";

export default function PartnersGrid({ partners }) {
  return (
    <div className={styles.bar}>
      {partners.map((partner) => (
        <a
          key={partner._id}
          target="_blank"
          href={partner.website}
          referrerPolicy="no-referrer"
        >
          <img className={styles.supporter} src={partner.logo} />
        </a>
      ))}
    </div>
  );
}

PartnersGrid.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.object).isRequired,
};
