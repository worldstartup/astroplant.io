import Button from "./Button";
import styles from "./modules/Button.module.css";

export default function JoinCommunityButton({ className }) {
  return (
    <a
      target={"blank"}
      referrerPolicy={"no-referrer"}
      href={"https://app.astroplant.sda-projects.nl/"}
      className={className}
    >
      <Button label={"Join the community"} className={styles.join} />
    </a>
  );
}
