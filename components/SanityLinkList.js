import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";
import styles from "./modules/SanityLinkList.module.css";

export default function SanityLinkList({ links, className }) {
  return (
    <div className={`${className} ${styles.row}`}>
      {links.map((link, index) => {
        let btn = null;

        if (links.length < 2) {
          btn = <Button className={styles.marginButton} label={link.label} />;
        } else {
          if (index % 2 != 0) {
            btn = <Button className={styles.marginButton} label={link.label} />;
          } else {
            btn = <Button label={link.label} color={"light"} />;
          }
        }

        if (link.type === "external") {
          return (
            <a
              key={link._key}
              target={"blank"}
              referrerPolicy={"no-referrer"}
              href={link.to}
            >
              {btn}
            </a>
          );
        } else {
          return (
            <Link key={link._key} href={link.to}>
              {btn}
            </Link>
          );
        }
      })}
    </div>
  );
}

SanityLinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
