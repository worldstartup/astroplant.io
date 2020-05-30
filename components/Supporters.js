import s from "./modules/Supporters.module.css";

import { SupporterBar } from "./SupporterBar.js";

export function Supporters() {
    return (
        <div className={s.supportersSection}>
            <div className={s.intro}>
                <h1 className='title'>Some of our Supporters</h1>
                <h3 className='subTitle' style={{ color: "#D6ECFF" }}>
                    See who’s lending us a helping hand.
                </h3>
            </div>
            <SupporterBar></SupporterBar>
        </div>
    );
}
