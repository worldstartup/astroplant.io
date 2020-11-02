import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import DropdownIcon from "../public/icons/arrow-down.svg";
import styles from "./modules/PageLink.module.css";

export default function PageLink({
  pageDetails,
  className,
  hasDropdown,
  dark,
  ...props
}) {
  if (hasDropdown) {
    return (
      <div className={`${styles.container} ${className}`} {...props}>
        <label className={`${styles.navLink} ${dark ? styles.dark : ""}`}>
          {pageDetails.name}
        </label>
        {hasDropdown && (
          <DropdownIcon
            className={`${styles.dropdown} ${dark ? styles.dark : ""}`}
          />
        )}
      </div>
    );
  } else {
    return (
      <Link key={pageDetails.name} href={pageDetails.path} {...props}>
        <div className={`${styles.container} ${className}`}>
          <a
            target=""
            className={`${styles.navLink} ${dark ? styles.dark : ""}`}
          >
            {pageDetails.name}
          </a>
        </div>
      </Link>
    );
  }
}

PageLink.propTypes = {
  pageDetails: PropTypes.object.isRequired,
  hasDropdown: PropTypes.bool,
  dark: PropTypes.bool,
};

PageLink.defaultProps = {
  hasDropdown: false,
  dark: false,
};
