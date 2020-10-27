import Link from "next/link";
import PropTypes from "prop-types";
import Brand from "./Brand";
import JoinCommunityButton from "./JoinCommunityButton";
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
          <JoinCommunityButton />
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
