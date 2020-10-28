import styles from "./modules/PageLink.module.css";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import DropdownIcon from "../public/icons/arrow-down.svg";

export default function PageLink({ pageDetails, className, hasDropdown }) {
  if (hasDropdown) {
    return (
      <div className={`${styles.container} ${className}`}>
        <a className={styles.navLink}>{pageDetails.name}</a>
        {hasDropdown && <DropdownIcon className={styles.dropdown} />}
      </div>
    );
  } else {
    return (
      <Link key={pageDetails.name} href={pageDetails.path}>
        <div className={`${styles.container} ${className}`}>
          <a className={styles.navLink}>{pageDetails.name}</a>
        </div>
      </Link>
    );
  }
}

PageLink.propTypes = {
  pageDetails: PropTypes.object.isRequired,
  hasDropdown: PropTypes.bool,
};

PageLink.defaultProps = {
  hasDropdown: false,
};
