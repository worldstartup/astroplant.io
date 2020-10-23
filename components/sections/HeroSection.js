// import the helper functions
import { imageUrlFor } from "../../services/sanity";
import FloatingElement from "../FloatingElement";
import ContentLayout from "../layouts/Contentlayout";
import styles from "../modules/HeroSection.module.css";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import { Video } from "../Video";

// create a prop called data
export default function HeroSection(props = { data }) {
  return (
    <Section id="hero" className={styles.heroSection}>
      <div className={styles.stars} />

      <FloatingElement id="planet">
        <img
          src={imageUrlFor(props.data.planetImage)}
          className={styles.mars}
        />
      </FloatingElement>

      <ContentLayout>
        <div className={styles.content}>
          <h1 className={styles.heroTitle}>{props.data.heroTitle}</h1>
          <SectionDescription
            richText={props.data.heroDescription}
            color={"#E9DEFF"}
          />
          <div className={styles.videoHolder}>
            <Video source={props.data.video}></Video>
          </div>
        </div>
      </ContentLayout>
    </Section>
  );
}
