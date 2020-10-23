import Link from "next/link";
import PropTypes from "prop-types";
import Brand from "./Brand";
import { Button } from "./Button";
import styles from "./modules/Header.module.css";

export function Header({ pages }) {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <Brand />

        <nav className={styles.nav}>
          {pages.map((link) => (
            <Link key={link} href="/">
              <a className={styles.navLink}>{link}</a>
            </Link>
          ))}
          <Button href="earthlings" label="Join the Community" />
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
