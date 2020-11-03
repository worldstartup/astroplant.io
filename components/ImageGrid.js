import PropTypes from "prop-types";
import styles from "./modules/ImageGrid.module.css";

export function ImageGrid({ images, ...props }) {
  return (
    <div className={styles.imageGrid} {...props}>
      {images.map((image) => (
        <img
          className={`${styles.gridImage}`}
          key={image._key}
          src={image.url}
        />
      ))}
    </div>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
