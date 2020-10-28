import PropTypes from "prop-types";
import Brand from "./Brand";
import ArticleCard from "./cards/ArticleCard";
import DropdownMenu from "./DropdownMenu";
import JoinCommunityButton from "./JoinCommunityButton";
import styles from "./modules/Header.module.css";
import PageLink from "./PageLink";

export function Header({ pages }) {
  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <Brand />

        <nav className={styles.nav}>
          {pages.map((page) => {
            return (
              <PageLink
                hasDropdown={page.subpages != null}
                key={page.path}
                className={styles.navLink}
                pageDetails={page}
              />
            );
          })}
          <JoinCommunityButton />
        </nav>
      </div>
      <DropdownMenu>
        <div className={styles.linksContainer}>
          <b className={styles.dropdownTitle}>Community</b>
          {pages.map((page) => {
            return (
              page.subpages && (
                <>
                  {page.subpages.map((subpage) => (
                    <PageLink
                      className={styles.dropdownLinks}
                      key={subpage.path}
                      pageDetails={subpage}
                    />
                  ))}
                </>
              )
            );
          })}
          <a className={styles.communityLink}>Community Platform</a>
        </div>
        <div className={styles.newsContainer}>
          <ArticleCard
            article={{
              title: "Looking through the eyes of a space chef!",
              date: "July 24, 2020",
              cover: "/images/card1.jpg",
            }}
          />
        </div>
      </DropdownMenu>
    </header>
  );
}

Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
