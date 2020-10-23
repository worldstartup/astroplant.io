import PropTypes from "prop-types";
import React from "react";
import Facebook from "../public/icons/facebook.svg";
import Instagram from "../public/icons/instagram.svg";
import Twitter from "../public/icons/twitter.svg";
import styles from "./modules/SocialIcons.module.css";

export default function SocialIcons({ color, className }) {
  return (
    <div className={`${styles.container} ${styles[color]} ${className}`}>
      <a className={`${styles.icon} ${styles[color]}`}>
        <Instagram />
      </a>
      <a className={`${styles.icon} ${styles[color]}`}>
        <Facebook />
      </a>
      <a className={`${styles.icon} ${styles[color]}`}>
        <Twitter />
      </a>
    </div>
  );
}

SocialIcons.propTypes = {
  color: PropTypes.string,
};

SocialIcons.defaultProps = {
  color: "light",
};
