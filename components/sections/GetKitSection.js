import React from "react";
import Button from "../Button";
import Card from "../cards/Card";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/GetKitSection.module.css";
import Section from "../Section";

export default function GetKitSection() {
  return (
    <Section id={"components"} bgColor={"dark-light"}>
      <ContentLayout>
        <h2 className={"centered-text"}>Get your Kit Now!</h2>
        <div className={styles.cardGrid}>
          <Card className={styles.card}>
            <h3 className={"centered-text"}>Build Your Own !</h3>
            <h4 className={styles.cardSubtitle}>Around € 299,-</h4>
            <p className={styles.cardDescription}>
              Order components yourself from your favorite electronics provider
              and build your own kit.
            </p>
            <div className={styles.buttonRow}>
              <Button
                label={"Order on Amazon"}
                bgColor={"light"}
                color={"dark"}
              />
              <Button label={"Order on AliExpress"} />
            </div>
          </Card>
          <Card className={styles.card}>
            <h3 className={"centered-text"}>Official Kit</h3>
            <h4 className={styles.cardSubtitle}>€ 399,-</h4>
            <p className={styles.cardDescription}>
              Order components from us and receive easy to assemble hardware and
              electronics.
            </p>
            <Button
              className={styles.marginButton}
              label={"Join the waiting list"}
            />
          </Card>
        </div>
      </ContentLayout>
    </Section>
  );
}

GetKitSection.propTypes = {};
