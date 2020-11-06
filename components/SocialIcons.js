import PropTypes from "prop-types";
import React from "react";
import Facebook from "../public/icons/facebook.svg";
import Instagram from "../public/icons/instagram.svg";
import Twitter from "../public/icons/twitter.svg";
import styles from "./modules/SocialIcons.module.css";

const ExternalLink = ({ className, href, children }) => {
  return (
    <a
      target="_blank"
      href={href}
      referrerPolicy="no-referrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default function SocialIcons({ color, className }) {
  return (
    <div className={`${styles.container} ${styles[color]} ${className}`}>
      <ExternalLink
        href={"https://www.instagram.com/astro_plant/"}
        className={`${styles.icon} ${styles[color]}`}
      >
        <Instagram />
      </ExternalLink>
      <ExternalLink className={`${styles.icon} ${styles[color]}`}>
        <Facebook />
      </ExternalLink>
      <ExternalLink
        href={"https://twitter.com/astroplant"}
        className={`${styles.icon} ${styles[color]}`}
      >
        <Twitter />
      </ExternalLink>
    </div>
  );
}

SocialIcons.propTypes = {
  color: PropTypes.string,
};

SocialIcons.defaultProps = {
  color: "light",
};
