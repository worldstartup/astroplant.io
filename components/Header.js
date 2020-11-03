import PropTypes from "prop-types";
import MenuIcon from "../public/icons/menu.svg";
import OutIcon from "../public/icons/open-outside.svg";
import Brand from "./Brand";
import ArticleCard from "./cards/ArticleCard";
import DropdownMenu from "./DropdownMenu";
import JoinCommunityButton from "./JoinCommunityButton";
import styles from "./modules/Header.module.css";
import PageLink from "./PageLink";

const HomeLink = ({ dark }) => (
  <PageLink
    dark={dark}
    className={styles.navLink}
    pageDetails={{ name: "Home", path: "/" }}
  />
);

const ContributeLink = ({ dark }) => (
  <PageLink
    dark={dark}
    className={styles.navLink}
    pageDetails={{ name: "Contribute", path: "/contribute" }}
  />
);

const ShopLink = ({ dark }) => (
  <PageLink
    dark={dark}
    className={styles.navLink}
    pageDetails={{ name: "Shop", path: "/shop" }}
  />
);

export function Header({ featuredArticles, dark }) {
  return (
    <header
      className={`${styles.header} ${dark ? "" : styles.bgGradient}`}
      id="header"
    >
      <div className={styles.container}>
        <Brand dark={dark} />

        <div className={styles.navMobile}>
          <DropdownMenu
            name={"mobile-nav"}
            trigger={
              <MenuIcon
                className={`${styles.menuIcon} ${dark ? styles.dark : ""}`}
              />
            }
          >
            <nav className={styles.linksMobile}>
              <HomeLink />
              <PageLink
                className={styles.navLink}
                pageDetails={{ name: "About Us", path: "/community/about-us" }}
              />
              <PageLink
                className={styles.navLink}
                pageDetails={{ name: "Goals", path: "/community/goals" }}
              />
              <ContributeLink />
              <ShopLink />
              <JoinCommunityButton />
            </nav>
          </DropdownMenu>
        </div>

        <nav className={styles.nav}>
          <HomeLink dark={dark} />
          <DropdownMenu
            trigger={
              <PageLink
                dark={dark}
                className={styles.navLink}
                pageDetails={{ name: "Community", path: null }}
                hasDropdown
              />
            }
            name={"community-submenu"}
          >
            <div className={styles.communityDropdown}>
              <div className={styles.linksContainer}>
                <b className={styles.dropdownTitle}>Community</b>

                <PageLink
                  className={styles.dropdownLinks}
                  pageDetails={{
                    name: "About Us",
                    path: "/community/about-us",
                  }}
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
            </div>
          </DropdownMenu>

          <ContributeLink dark={dark} />
          <ShopLink dark={dark} />
          <JoinCommunityButton dark={dark} />
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  featuredArticles: PropTypes.arrayOf(PropTypes.object).isRequired,
  dark: PropTypes.bool,
};

Header.defaultProps = {
  dark: false,
};
