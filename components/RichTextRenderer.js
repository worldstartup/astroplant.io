import PropTypes from "prop-types";
import React from "react";
import { renderRichText } from "../services/sanity";
import styles from "./modules/RichTextRenderer.module.css";

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
