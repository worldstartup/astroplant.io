import PropTypes from "prop-types";
import AnimateListInView from "./AnimateListInView";
import styles from "./modules/PartnersGrid.module.css";
import SanityImage from "./SanityImage";

export default function PartnersGrid({ animate, partners }) {
  if (animate) {
    return (
      <AnimateListInView
        itemsAnimation={"fadeIn"}
        listAnimation={"list"}
        className={styles.bar}
      >
        {partners.map((partner) => (
          <a
            key={partner._id}
            target="_blank"
            href={partner.website}
            referrerPolicy="no-referrer"
          >
            <SanityImage
              className={styles.supporter}
              image={partner.logo}
              params={{ h: 100 }}
            />
          </a>
        ))}
      </AnimateListInView>
    );
  } else {
    return (
      <div className={styles.bar}>
        {partners.map((partner) => (
          <a
            key={partner._id}
            target="_blank"
            href={partner.website}
            referrerPolicy="no-referrer"
          >
            <SanityImage
              className={styles.supporter}
              image={partner.logo}
              params={{ h: 100 }}
            />
          </a>
        ))}
      </div>
    );
  }
}

PartnersGrid.propTypes = {
  partners: PropTypes.arrayOf(PropTypes.object).isRequired,
  animate: PropTypes.bool,
};

PartnersGrid.defaultProps = {
  animate: false,
};
