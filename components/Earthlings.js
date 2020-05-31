import s from "./modules/Earthlings.module.css";
import { IntroText } from "./IntroText";
import { Footnote } from "./Footnote";
import { Card } from "./Card";
import { KitCard } from "./KitCard";

export function Earthlings() {
    return (
        <section id='earthlings' className={s.earthlings}>
            <div className={s.introHolder}>
                <IntroText
                    title='AstroPlant is for all Earthlings'
                    subTitle='All the ways you can become a Space Farmer. There’s no better time than now.'
                    subTitleColor='E5FFFE'
                ></IntroText>
            </div>
            <div className={s.earthSection}>
                <img className={s.earth} src='/images/earth.png' />
                <div className={s.gradient}></div>
                <div className={s.holder}>
                    <Card
                        image={"/images/card1.jpg"}
                        title={"Community"}
                        greenTitle={"Free"}
                        text={
                            "Grow with the community on Slack. Exchange ideas and talk about AstroPlant.\n\n" +
                            "The Sky’s the limit!"
                        }
                        buttonLabel={"Join"}
                    ></Card>
                    <KitCard
                        image={"/images/card2.png"}
                        title={"The Kit"}
                        greenTitle={"€ 249,-"}
                        text={"A customizable plant station."}
                        primaryButton={"Order"}
                        secondaryButton={"Donate"}
                    ></KitCard>
                    <Card
                        image={"/images/card3.png"}
                        title={"Developers"}
                        greenTitle={"Free"}
                        text={
                            "You can  help develop a rigorous and tested product by contributing to the AstroPlant source code.\n\n" +
                            "Check it out on GitHub."
                        }
                        buttonLabel={"Contribute"}
                    ></Card>
                </div>
                <Footnote text='Become a Space Farmer and act now!'></Footnote>
            </div>
        </section>
    );
}
