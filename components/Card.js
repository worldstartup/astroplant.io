import { Button } from "./Button";
import s from "./modules/Card.module.css";

export function Card(
  props = {
    image,
    title,
    greenTitle,
    text,
    buttonLabel,
  }
) {
  return (
    <div className={s.card}>
      <img className={s.image} src={props.image} />
      <div className={s.container}>
        <div className={s.top}>
          <h2 className={s.title}>{props.title}</h2>
          <h2 className={s.greenTitle}>{props.greenTitle}</h2>
        </div>
        <p className={s.text}>{props.text}</p>
        <Button label={props.buttonLabel}></Button>
      </div>
    </div>
  );
}
