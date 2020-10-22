import Link from "next/link";
import s from "./modules/Button.module.css";

export function Button(
  props = {
    label,
    bgColor,
    color,
    href,
  }
) {
  return (
    <Link href={`#` + props.href}>
      <button
        className={s.button}
        style={{ backgroundColor: props.bgColor, color: props.color }}
      >
        {props.label}
      </button>
    </Link>
  );
}
