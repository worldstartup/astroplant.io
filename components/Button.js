import s from "./modules/Button.module.css";

export function Button(
    props = {
        label,
    }
) {
    return <button className={s.button}>{props.label}</button>;
}
