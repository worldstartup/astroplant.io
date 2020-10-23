import Link from "next/link";
import styles from "./modules/Button.module.css";

export function Button({ label, bgColor, color, className, href, ...props }) {
  return (
    <Link href={`#` + href}>
      <button
        className={`${styles.button} ${className}`}
        style={{ backgroundColor: bgColor, color: color }}
        aria-label={label}
        type={props.type || "button"}
        {...props}
      >
        {label}
      </button>
    </Link>
  );
}
