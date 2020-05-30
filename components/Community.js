import s from "./modules/Community.module.css";

import { ImageGrid } from "./ImageGrid";
import { TintedText } from "./TintedText";

export function Community() {
    return (
        <div className={s.communitySection}>
            <div className={s.intro}>
                <h1 className='title'>Grow with the Community</h1>
                <h3 className='subTitle' style={{ color: "#E0E4FF" }}>
                    There’s a whole galaxy out there.
                </h3>
            </div>
            <ImageGrid></ImageGrid>
            <TintedText
                text={
                    "AstroPlant is an open source project meaning that it is open to everyone, and is building for everyone. There are many ways of contributing to the project. You can buy one of the kits, tinker with it and collect valuable data, or you can help us improve our community platform. You can teach or learn biology, plant carrots or simply follow our news feed, and spread the word about our amazing community of Space Farmers.\n\n" +
                    "Everyone can be a Space Farmer."
                }
                color={"#DEE8FF"}
                margin={"3rem auto"}
            ></TintedText>
        </div>
    );
}
