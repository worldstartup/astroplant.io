import s from "./modules/ImageGrid.module.css";
import { imageUrlFor } from "../services/middleman";

export function ImageGrid(props = { data }) {
  return (
    <div className={s.imageGrid}>
      {props.data.communityImages.map((image) => (
        <img className={`${s.gridImage}`} src={imageUrlFor(image)} />
      ))}
    </div>
  );
}
