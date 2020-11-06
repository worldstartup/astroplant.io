import PropTypes from "prop-types";
import React from "react";
import { optimizeImage } from "../services/sanity";

export default function SanityImage({ image, params = {}, ...props }) {
  return (
    <img
      alt={image.caption || " "}
      src={optimizeImage(image.url, params)}
      {...props}
    />
  );
}

SanityImage.propTypes = {
  image: PropTypes.object.isRequired,
  params: PropTypes.object,
};
