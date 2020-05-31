import s from "./modules/Community.module.css";

import { ImageGrid } from "./ImageGrid";
import { TintedText } from "./TintedText";
import { IntroText } from "./IntroText";

export function Community() {
    return (
        <section id='community' className={s.communitySection}>
            <IntroText
                title='Grow with the Community'
                subTitle='There’s a whole galaxy out there.'
                subTitleColor='E0E4FF'
            ></IntroText>
            <ImageGrid></ImageGrid>
            <TintedText
                text={
                    "AstroPlant is an open source project meaning that it is open to everyone, and is building for everyone. There are many ways of contributing to the project. You can buy one of the kits, tinker with it and collect valuable data, or you can help us improve our community platform. You can teach or learn biology, plant carrots or simply follow our news feed, and spread the word about our amazing community of Space Farmers.\n\n" +
                    "Everyone can be a Space Farmer."
                }
                color={"#DEE8FF"}
                margin={"3rem auto"}
            ></TintedText>
        </section>
    );
}
