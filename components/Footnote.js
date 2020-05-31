import s from "./modules/Footnote.module.css";

export function Footnote(props = { text }) {
    return <p className={s.footnote}>{props.text}</p>;
}
