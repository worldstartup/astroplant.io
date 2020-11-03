import PropTypes from "prop-types";
import React from "react";
import styles from "./modules/WayToContribute.module.css";
import RichTextRenderer from "./RichTextRenderer";
import SanityLinkList from "./SanityLinkList";

export default function WayToContribute({ way }) {
  return (
    <div className={styles.container}>
      <img src={way.cover} className={styles.cover} />
      <div className={styles.content}>
        <h3 className={styles.title}>{way.title}</h3>
        <RichTextRenderer richText={way.content} />
        <SanityLinkList links={way.links} />
      </div>
    </div>
  );
}

WayToContribute.propTypes = {
  way: PropTypes.object.isRequired,
  extraButton: PropTypes.node,
};

WayToContribute.defaultProps = {
  extraButton: null,
};
