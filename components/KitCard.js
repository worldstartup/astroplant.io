import s from "./modules/KitCard.module.css";
import { Button } from "./Button";

export function KitCard(
  props = {
    image,
    title,
    greenTitle,
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
        <p style={{ marginBottom: "2rem" }} className={s.text}>
          {props.text}
        </p>
        <div className={s.list}>
          <div className={s.item}>
            <img alt="icon" className={s.icon} src="/images/planticon.png" />
            <p className={s.text}>Plant</p>
          </div>
          <div className={s.item}>
            <img alt="icon" className={s.icon} src="/images/monitor.png" />
            <p className={s.text}>Monitor</p>
          </div>
          <div className={s.item}>
            <img alt="icon" className={s.icon} src="/images/share.png" />
            <p className={s.text}>Share</p>
          </div>
        </div>
        <div className={s.buttons}>
          <Button label={props.primaryButton}></Button>
          <Button
            label={props.secondaryButton}
            bgColor={"white"}
            color={"black"}
          ></Button>
        </div>
      </div>
    </div>
  );
}
