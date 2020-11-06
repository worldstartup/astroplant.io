import PropTypes from "prop-types";
import styles from "./modules/ImageGrid.module.css";
import SanityImage from "./SanityImage";

export function ImageGrid({ images, ...props }) {
  return (
    <div className={styles.imageGrid} {...props}>
      {images.map((image) => (
        <SanityImage
          className={styles.gridImage}
          params={{ h: 384 }}
          key={image._key}
          image={image}
        />
      ))}
    </div>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
