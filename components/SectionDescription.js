import PropTypes from "prop-types";
import { renderRichText } from "../services/sanity";
import styles from "./modules/SectionDescription.module.css";

export default function SectionDescription({ text, richText, color }) {
  return (
    <div className={styles.container} style={{ color: `${color}` }}>
      {text && <p style={{ color: color }}>{text}</p>}
      {richText && renderRichText(richText)}
    </div>
  );
}

SectionDescription.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  richText: PropTypes.array,
  tint: PropTypes.bool,
};

SectionDescription.defaultProps = {
  color: "#fff",
  text: null,
  richText: null,
  tint: false,
};
