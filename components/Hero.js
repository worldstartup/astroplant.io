import s from "./modules/Hero.module.css";

import { Video } from "./Video";
import { TintedText } from "./TintedText";

// import the helper functions

import { imageUrlFor, renderRichText } from "../services/middleman";

// create a prop called data
export function Hero(props = { data }) {
    React.useEffect(() => {
        // define and assign a function to the hero top padding
        const setHeroPadding = () => {
            // get the height of the header
            const headerHeight = document.querySelector("#header").clientHeight;

            // find the hero section DOM element and set its padding top to the height of the header
            document.querySelector("#hero").style.paddingTop = `${headerHeight}px`;

            // equal padding to the bottom
            document.querySelector("#hero").style.paddingBottom = `${headerHeight}px`;
        };

        setHeroPadding();
    });

    return (
        <section id='hero' className={s.heroSection}>
            <div className={s.stars}></div>
            <div className={s.planetHolder}>
                {/* get the image and transform it into a url */}
                <img src={imageUrlFor(props.data.planetImage)} className={s.mars} />
                {/* get the heroTitle */}
                <h1 className={s.heroTitle}>{props.data.heroTitle}</h1>
            </div>
            <div className={s.videoHolder}>
                {/* get the heroSubTitle */}
                <h3 className={s.subTitle}>{props.data.heroSubTitle}</h3>
                <Video source='/astro-intro.mp4'></Video>
            </div>
            {/* get heroDescription and use the helper function to transform it */}
            <TintedText
                text={renderRichText(props.data.heroDescription)}
                color={"#E9DEFF"}
                margin={"3rem auto 0 auto"}
            ></TintedText>
        </section>
    );
}
