import PropTypes from "prop-types";
import { forwardRef } from "react";
import styles from "./modules/Button.module.css";

const Button = forwardRef(
  ({ bgColor, color, className, href, icon, label, type, ...props }, ref) => (
    <button
      className={`${styles.button} ${styles[color]} ${className}`}
      aria-label={label}
      type={type}
      ref={ref}
      {...props}
    >
      {label}
      {icon && <div className={styles.iconHolder}>{icon}</div>}
    </button>
  )
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  color: "secondary",
  type: "button",
  icon: null,
};

export default Button;
