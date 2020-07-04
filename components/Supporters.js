import s from "./modules/Supporters.module.css";

import { SupporterBar } from "./SupporterBar.js";
import { IntroText } from "./IntroText";

export function Supporters(props = { data }) {
    return (
        <section className={s.supportersSection}>
            <IntroText
                title={props.data.supportersTitle}
                subTitle={props.data.supportersSubTitle}
                subTitleColor='D6ECFF'
            ></IntroText>
            <SupporterBar data={props.data}></SupporterBar>
        </section>
    );
}
