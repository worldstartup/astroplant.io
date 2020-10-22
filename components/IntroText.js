import s from "./modules/IntroText.module.css";

export function IntroText(props = { title, subTitle, subTitleColor }) {
  return (
    <div className={s.intro}>
      <h1 className={s.title}>{props.title}</h1>
      <h3 className={s.subTitle} style={{ color: "#" + props.subTitleColor }}>
        {props.subTitle}
      </h3>
    </div>
  );
}
