import Link from "next/link";
import React from "react";
import ContentLayout from "../components/layouts/ContentLayout";
import styles from "../styles/ErrorPage.module.css";

export default function ErrorPage(props) {
  return (
    <div className={styles.layout}>
      <ContentLayout>
        <div className={styles.content}>
          <div className={styles.gifHolder}>
            <iframe
              src="https://giphy.com/embed/xDQ3Oql1BN54c"
              width="100%"
              height="100%"
              className={styles.iframe}
              frameBorder="0"
              allowFullScreen
            />
          </div>

          <h1 className={styles.title}>404</h1>
          <h2 className={styles.sub}>Page not found.</h2>
          <p className={styles.text}>
            Looks like you've entered AstroPlant black hole...
            <br />
            Not to worry. You can either go back to our{" "}
            <Link passHref href={"/"}>
              <a className={styles.link}>homepage</a>
            </Link>{" "}
            or look at this cute astro-doge all day.
          </p>
        </div>
      </ContentLayout>
    </div>
  );
}
