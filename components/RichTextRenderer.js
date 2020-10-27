import styles from "./modules/RichTextRenderer.module.css";

import React from "react";
import PropTypes from "prop-types";
import { renderRichText } from "../services/sanity";

export default function RichTextRenderer({ richText, className, ...props }) {
  return (
    <div className={`${styles.container} ${className}`} {...props}>
      {renderRichText(richText)}
    </div>
  );
}

RichTextRenderer.propTypes = {
  richText: PropTypes.array.isRequired,
};
