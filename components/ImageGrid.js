import PropTypes from "prop-types";
import { imageUrlFor } from "../services/sanity";
import styles from "./modules/ImageGrid.module.css";

export function ImageGrid({ images, ...props }) {
  return (
    <div className={styles.imageGrid} {...props}>
      {images.map((image) => (
        <img
          className={`${styles.gridImage}`}
          key={image._key}
          src={imageUrlFor(image)}
        />
      ))}
    </div>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
