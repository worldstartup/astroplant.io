import s from "./modules/Video.module.css";

export function Video(props = { source }) {
    return (
        <div className={s.holder}>
            <div className={s.gradient}></div>
            <video className={s.video} loop autoPlay muted controls={true}>
                <source src={props.source} type='video/mp4' />
            </video>
        </div>
    );
}
