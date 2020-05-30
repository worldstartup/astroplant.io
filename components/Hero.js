import s from "./modules/Hero.module.css";

import { Video } from "./Video";
import { TintedText } from "./TintedText";

export function Hero() {
    React.useEffect(() => {
        // define and assign a function to the hero top margin
        const setHeroMargin = () => {
            // get the height of the header
            const headerHeight = document.querySelector("#header").clientHeight;

            // find the hero section DOM element and set its margin top to the height of the header
            document.querySelector("#hero").style.paddingTop = `${headerHeight}px`;

            // equal padding to the bottom
            document.querySelector("#hero").style.paddingBottom = `${headerHeight}px`;
        };

        setHeroMargin();
    });

    return (
        <section id='hero' className={s.heroSection}>
            <div className={s.stars}></div>
            <div className={s.planetHolder}>
                <img src='/images/mars.png' className={s.mars} />
                <h1 className={s.heroTitle}>Grow Plants in Space</h1>
            </div>
            <div className={s.videoHolder}>
                <h3 className='subTitle'>Time to start your journey.</h3>
                <Video source='/astro-intro.mp4'></Video>
            </div>
            <TintedText
                text={
                    "AstroPlant is an educational citizen science project in collaboration with the European Space Agency to engage a new generation of Space Farmers, collect data and ideas for agriculture on Mars, develop open source research equipment and create awareness of regenerative and closed-loop life support systems."
                }
                color={"#E9DEFF"}
                margin={"3rem auto 0 auto"}
            ></TintedText>
        </section>
    );
}
