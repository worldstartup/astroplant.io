import GithubIcon from "../public/icons/github.svg";
import Button from "./Button";
import styles from "./modules/Button.module.css";

export default function GithubButton({ className }) {
  return (
    <a
      target={"blank"}
      referrerPolicy={"no-referrer"}
      href={"https://github.com/astroplant"}
      className={className}
    >
      <Button
        color={"dark"}
        bgColor={"light"}
        label={"View Github"}
        icon={<GithubIcon />}
        className={styles.github}
      />
    </a>
  );
}
