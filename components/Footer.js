import Brand from "./Brand";
import GithubButton from "./GithubButton";
import JoinCommunityButton from "./JoinCommunityButton";
import styles from "./modules/Footer.module.css";
import PageLink from "./PageLink";
import SocialIcons from "./SocialIcons";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Brand />

          <nav className={styles.nav}>
            <div className={styles.navSection}>
              <p className={styles.navSectionTitle}>AstroPlant</p>
              <PageLink
                className={styles.pageLink}
                pageDetails={{ name: "Home", path: "/" }}
              />
              <PageLink
                className={styles.pageLink}
                pageDetails={{ name: "Contribute", path: "/contribute" }}
              />
              <PageLink
                className={styles.pageLink}
                pageDetails={{ name: "Shop", path: "/shop" }}
              />
            </div>

            <div className={styles.navSection}>
              <p className={styles.navSectionTitle}>Community</p>
              <PageLink
                className={styles.pageLink}
                pageDetails={{ name: "About Us", path: "/community/about-us" }}
              />

              <PageLink
                className={styles.pageLink}
                pageDetails={{ name: "Goals", path: "/community/goals" }}
              />
            </div>
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
