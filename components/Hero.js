import s from "./modules/Hero.module.css";

import { Video } from "./Video";

export function Hero() {
    React.useEffect(() => {
        // define and assign a function to the hero top margin
        const setHeroMargin = () => {
            // get the height of the header
            const headerHeight = document.querySelector("#header").clientHeight;

            // find the hero section DOM element and set its margin top to the height of the header
            document.querySelector("#hero").style.marginTop = `${headerHeight}px`;
        };

        setHeroMargin();
    });

    return (
        <section id='hero' className={s.heroSection}>
            <div className={s.planetHolder}>
                <img src='/images/mars.png' className={s.mars} />
                <h1 className={s.title}>Grow Plants in Space</h1>
            </div>
            <div>
                <h3 className={s.subTitle}>Time to start your journey.</h3>
                <Video></Video>
            </div>
        </section>
    );
}
