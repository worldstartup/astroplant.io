import Link from "next/link";
import PropTypes from "prop-types";
import Brand from "./Brand";
import { Button } from "./Button";
import styles from "./modules/Footer.module.css";
import SocialIcons from "./SocialIcons";

export function Footer({ pages }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Brand />

          <div className={styles.nav}>
            {pages.map((link) => (
              <Link key={link} href="/">
                <a>{link}</a>
              </Link>
            ))}
          </div>

          <SocialIcons />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>
            Growing a new generation of space farmers
          </h1>
          <p>
            Grow with the community on <a>Slack</a>
          </p>
          <div className={styles.ctaButtons}>
            <Button
              className={styles.marginButtons}
              label="Join the community"
            />
            <Button
              className={styles.marginButtons}
              label="View GitHub"
              bgColor="white"
              color="black"
            />
          </div>
          <div className={styles.miles}>
            <img
              src="/images/miles.svg"
              className={styles.milesLogo}
              alt="miles logo"
            />
            <p>was here.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
