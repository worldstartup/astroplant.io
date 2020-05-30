import s from "./modules/SupporterBar.module.css";

export function SupporterBar() {
    return (
        <div className={s.bar}>
            <img className={s.supporter} src='/images/esa.png' />
            <img className={s.supporter} src='/images/melissa.png' />
            <img className={s.supporter} src='/images/surf.png' />
            <img className={s.supporter} src='/images/bordersessions.png' />
            <img className={s.supporter} src='/images/mobgen.png' />
        </div>
    );
}
