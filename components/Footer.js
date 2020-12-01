import Image from "next/image";
import { PLATFORM_URL } from "../services/community-api";
import Brand from "./Brand";
import styles from "./modules/Footer.module.css";
import PageLink from "./PageLink";
import SocialIcons from "./SocialIcons";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Brand />
          <SocialIcons />
        </div>

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
            {/* <PageLink
              className={styles.pageLink}
              pageDetails={{ name: "Contribute", path: "/contribute" }}
            /> */}
            {/* <PageLink
              className={styles.pageLink}
              pageDetails={{ name: "Shop", path: "/shop" }}
            /> */}
          </div>

          {/* <div className={styles.navSection}>
            <p className={styles.navSectionTitle}>Community</p>
            <PageLink
              className={styles.pageLink}
              pageDetails={{ name: "About Us", path: "/community/about-us" }}
            />

            <PageLink
              className={styles.pageLink}
              pageDetails={{ name: "Goals", path: "/community/goals" }}
            />
          </div> */}

          <div className={styles.navSection}>
            <p className={styles.navSectionTitle}>For Space Farmers</p>
            {/* <a
              target="_blank"
              referrerPolicy="origin"
              href={"https://docs.astroplant.io/"}
              className={styles.externalLink}
            >
              Documentation
            </a> */}
            {/* <div className={styles.linkRow}>
              <a
                target="_blank"
                referrerPolicy="origin"
                href={PLATFORM_URL}
                className={styles.externalLink}
              >
                Platform
              </a>
              <span className={styles.betaTag}>BETA</span>
            </div> */}

            <a
              target="_blank"
              referrerPolicy="origin"
              href={"https://github.com/astroplant/"}
              className={styles.externalLink}
            >
              Github
            </a>
          </div>
        </nav>

        <div className={styles.miles}>
          <a
            href={"https://meetmiles.nl/"}
            target={"_blank"}
            referrerPolicy={"origin"}
          >
            <Image
              src="/images/miles.svg"
              className={styles.milesLogo}
              alt="miles logo"
              width={56}
              height={15}
              layout={"fixed"}
            />
            was here.
          </a>
        </div>
      </div>
    </footer>
  );
}
