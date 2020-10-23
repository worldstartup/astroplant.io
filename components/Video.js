import styles from "./modules/Video.module.css";

export function Video(props = { source }) {
  return (
    <div className={styles.holder}>
      <div className={styles.gradient}></div>
      <video className={styles.video} muted controls={true}>
        <source src={props.source} type="video/mp4" />
      </video>
    </div>
  );
}
