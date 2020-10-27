import PropTypes from "prop-types";
import styles from "./modules/Button.module.css";

export default function Button({
  bgColor,
  color,
  className,
  href,
  icon,
  label,
  type,
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${styles[`bg-${bgColor}`]} ${
        styles[`${color}`]
      } ${className}`}
      aria-label={label}
      type={type}
      {...props}
    >
      {label}
      {icon && <div className={styles.iconHolder}>{icon}</div>}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  bgColor: "secondary",
  color: "light",
  type: "button",
  icon: null,
};
