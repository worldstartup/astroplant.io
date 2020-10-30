import Brand from "./Brand";
import styles from "./modules/Footer.module.css";
import PageLink from "./PageLink";
import SocialIcons from "./SocialIcons";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Brand />

        <h1 className={styles.title}>
          Growing a new generation of urban and space farmers
        </h1>

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

        <div className={styles.row}>
          <SocialIcons />

          <div className={styles.sep} />

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
