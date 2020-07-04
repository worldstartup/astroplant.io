import s from "./modules/Community.module.css";

import { ImageGrid } from "./ImageGrid";
import { TintedText } from "./TintedText";
import { IntroText } from "./IntroText";

import { imageUrlFor, renderRichText } from "../services/middleman";

export function Community(props = { data }) {
    return (
        <section id='community' className={s.communitySection}>
            <IntroText
                title={props.data.communityTitle}
                subTitle={props.data.communitySubTitle}
                subTitleColor='E0E4FF'
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
