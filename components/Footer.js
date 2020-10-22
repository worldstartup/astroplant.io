import Link from "next/link";
import { Button } from "./Button";
import s from "./modules/Footer.module.css";

export function Footer(props = { data }) {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.left}>
          <img
            alt="Astroplant logo"
            className={s.logo}
            src="/images/logo.png"
          />
          <div className={s.nav}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="#">
              <a>Community</a>
            </Link>
            <Link href="#">
              <a>The Kit</a>
            </Link>
            <Link href="#">
              <a>Developers</a>
            </Link>
          </div>
          <div className={s.socials}>
            <a href="" target="_blank">
              <img
                className={s.icon}
                alt="social icon"
                src="/images/insta.png"
              />
            </a>
            <a href="" target="_blank">
              <img
                className={s.icon}
                alt="social icon"
                src="/images/twitter.png"
              />
            </a>
            <a href="" target="_blank">
              <img className={s.icon} alt="social icon" src="/images/fb.png" />
            </a>
          </div>
        </div>
        <div className={s.right}>
          <h1 className={s.title}>{props.data.footerSlogan}</h1>
          <h2 className={s.subTitle}>{props.data.footerSubSlogan}</h2>
          <div className={s.buttons}>
            <Button label="Join"></Button>
            <Button label="View GitHub" bgColor="white" color="black"></Button>
          </div>
          <div className={s.miles}>
            <img
              src="/images/miles.svg"
              className={s.milesLogo}
              alt="miles logo"
            />
            <p>was here.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
