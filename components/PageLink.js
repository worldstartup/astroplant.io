import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import DropdownIcon from "../public/icons/arrow-down.svg";
import styles from "./modules/PageLink.module.css";

export default function PageLink({
  pageDetails,
  className,
  hasDropdown,
  ...props
}) {
  if (hasDropdown) {
    return (
      <div className={`${styles.container} ${className}`} {...props}>
        <label className={styles.navLink}>{pageDetails.name}</label>
        {hasDropdown && <DropdownIcon className={styles.dropdown} />}
      </div>
    );
  } else {
    return (
      <Link key={pageDetails.name} href={pageDetails.path} {...props}>
        <div className={`${styles.container} ${className}`}>
          <a target="" className={styles.navLink}>
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
};

PageLink.defaultProps = {
  hasDropdown: false,
};
