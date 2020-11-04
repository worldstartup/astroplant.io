import PropTypes from "prop-types";
import React from "react";
import LinkedinIcon from "../public/icons/linkedin.svg";
import styles from "./modules/TeamMember.module.css";
import SanityImage from "./SanityImage";

export default function TeamMember({ teamMember }) {
  return (
    <div className={styles.container}>
      <SanityImage
        params={{ h: 256 }}
        image={teamMember.picture}
        className={styles.picture}
      />
      <div className={styles.memberDetails}>
        <h3 className={styles.name}>{teamMember.fullName}</h3>
        <b className={styles.role}>{teamMember.role}</b>
        <a className={styles.link} href={teamMember.linkedinProfile}>
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  teamMember: PropTypes.object.isRequired,
};
