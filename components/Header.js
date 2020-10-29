import PropTypes from "prop-types";
import { useState } from "react";
import OutIcon from "../public/icons/open-outside.svg";
import Brand from "./Brand";
import ArticleCard from "./cards/ArticleCard";
import DropdownMenu from "./DropdownMenu";
import JoinCommunityButton from "./JoinCommunityButton";
import styles from "./modules/Header.module.css";
import PageLink from "./PageLink";

export function Header({ featuredArticles }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <Brand />

        <nav className={styles.nav}>
          <PageLink
            className={styles.navLink}
            pageDetails={{ name: "Home", path: "/" }}
          />
          <PageLink
            className={styles.navLink}
            pageDetails={{ name: "Community", path: null }}
            hasDropdown
            onClick={() => setShowDropdown(!showDropdown)}
          />
          <PageLink
            className={styles.navLink}
            pageDetails={{ name: "Contribute", path: "/contribute" }}
          />
          <PageLink
            className={styles.navLink}
            pageDetails={{ name: "Shop", path: "/shop" }}
          />
          <JoinCommunityButton />
        </nav>
      </div>
      <DropdownMenu visible={showDropdown}>
        <div className={styles.linksContainer}>
          <b className={styles.dropdownTitle}>Community</b>

          <PageLink
            className={styles.dropdownLinks}
            pageDetails={{ name: "About Us", path: "/community/about-us" }}
          />

          <PageLink
            className={styles.dropdownLinks}
            pageDetails={{ name: "Goals", path: "/community/goals" }}
          />

          <div className={styles.row}>
            <a
              target={"blank"}
              referrerPolicy={"no-referrer"}
              href={"https://app.astroplant.sda-projects.nl/"}
              className={styles.communityLink}
            >
              Community Platform
            </a>
            <OutIcon className={styles.outIcon} />
          </div>
        </div>
        <div className={styles.newsContainer}>
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </DropdownMenu>
    </header>
  );
}

Header.propTypes = {
  featuredArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
