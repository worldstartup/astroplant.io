import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";
import styles from "./modules/WayToContribute.module.css";
import RichTextRenderer from "./RichTextRenderer";

export default function WayToContribute({ way, extraButton }) {
  return (
    <div className={styles.container}>
      <img src={way.cover} className={styles.cover} />
      <div className={styles.content}>
        <h3 className={styles.title}>{way.title}</h3>
        <RichTextRenderer richText={way.content} />
        <div className={styles.buttonRow}>
          <Button label={"Contribute now"} />
          {extraButton && extraButton}
        </div>
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
