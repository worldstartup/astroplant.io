import PropTypes from "prop-types";
import React from "react";
import { optimizeImage } from "../services/sanity";

export default function SanityImage({ src, params = {}, ...props }) {
  return <img src={optimizeImage(src, params)} {...props} />;
}

SanityImage.propTypes = {
  src: PropTypes.string.isRequired,
  params: PropTypes.object,
};
