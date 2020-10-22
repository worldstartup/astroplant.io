import { renderRichText } from "../services/middleman";
import { ImageGrid } from "./ImageGrid";
import { IntroText } from "./IntroText";
import s from "./modules/Community.module.css";
import { TintedText } from "./TintedText";

export function Community(props = { data }) {
  return (
    <section id="community" className={s.communitySection}>
      <IntroText
        title={props.data.communityTitle}
        subTitle={props.data.communitySubTitle}
        subTitleColor="E0E4FF"
      ></IntroText>
      <ImageGrid data={props.data}></ImageGrid>
      <TintedText
        text={renderRichText(props.data.communityDescription)}
        color={"#DEE8FF"}
        margin={"3rem auto"}
      ></TintedText>
    </section>
  );
}
