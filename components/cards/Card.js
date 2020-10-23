import PropTypes from "prop-types";
import styles from "../modules/Card.module.css";

export default function Card({ bgColor, className, children, ...props }) {
  return (
    <div className={`${styles.card} bg-${bgColor} ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  bgColor: "grey-dark",
};
