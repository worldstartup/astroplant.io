import PropTypes from "prop-types";
import styles from "./modules/Video.module.css";

export default function Video({ url }) {
  const params = ["autoplay=1", "modestbranding=1", "origin=astroplant.io"];
  const fullURL = url + "?" + params.join("&");

  return (
    <div className={styles.holder}>
      <iframe
        width="560"
        height="315"
        src={fullURL}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.video}
      />
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string.isRequired,
};
