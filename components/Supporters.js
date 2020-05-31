import s from "./modules/Supporters.module.css";

import { SupporterBar } from "./SupporterBar.js";
import { IntroText } from "./IntroText";

export function Supporters() {
    return (
        <section className={s.supportersSection}>
            <IntroText
                title='Some of our Supporters'
                subTitle='See who’s lending us a helping hand.'
                subTitleColor='D6ECFF'
            ></IntroText>
            <SupporterBar></SupporterBar>
        </section>
    );
}
