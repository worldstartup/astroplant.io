import s from "./modules/Hero.module.css";

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
            <h1>Grow Plants in Space</h1>
        </section>
    );
}
