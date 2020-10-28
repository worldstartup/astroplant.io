import Link from "next/link";
import PropTypes from "prop-types";
import Brand from "./Brand";
import GithubButton from "./GithubButton";
import JoinCommunityButton from "./JoinCommunityButton";
import styles from "./modules/Footer.module.css";
import PageLink from "./PageLink";
import SocialIcons from "./SocialIcons";

export function Footer({ pages }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Brand />

          <nav className={styles.nav}>
            <div className={styles.navSection}>
              <p className={styles.navSectionTitle}>AstroPlant</p>
              {pages.map((page) => {
                if (!page.subpages) {
                  return (
                    <PageLink
                      key={page.path}
                      className={styles.pageLink}
                      pageDetails={page}
                    />
                  );
                }
              })}
            </div>
            {pages.map((page) => {
              if (page.subpages) {
                return (
                  <div key={page.name} className={styles.navSection}>
                    <p className={styles.navSectionTitle}>{page.name}</p>
                    {page.subpages.map((sub) => (
                      <PageLink
                        key={sub.path}
                        className={styles.pageLink}
                        pageDetails={sub}
                      />
                    ))}
                  </div>
                );
              }
            })}
          </nav>

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
            <JoinCommunityButton className={styles.marginButtons} />
            <GithubButton className={styles.marginButtons} />
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
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
