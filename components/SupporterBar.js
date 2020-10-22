import s from "./modules/SupporterBar.module.css";
import { imageUrlFor } from "../services/middleman";

export function SupporterBar(props = { data }) {
  return (
    <div className={s.bar}>
      {props.data.partnerImages.map((image) => (
        <img className={s.supporter} src={imageUrlFor(image)} />
      ))}
    </div>
  );
}
