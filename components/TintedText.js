import s from "./modules/TintedText.module.css";

export function TintedText(props = { text, color }) {
    return (
        <p className={s.text} style={{ color: props.color, margin: props.margin }}>
            {props.text}
        </p>
    );
}
