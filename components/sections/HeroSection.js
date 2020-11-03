// import the helper functions
import PropTypes from "prop-types";
import FloatingGrid from "../FloatingGrid.js";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/HeroSection.module.css";
import SanityImage from "../SanityImage.js";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import { Video } from "../Video";

// create a prop called data
export default function HeroSection({
  title,
  imageUrl,
  description,
  videoUrl,
}) {
  return (
    <Section id="hero" className={styles.heroSection}>
      <div className={styles.stars} />

      <ContentLayout>
        <FloatingGrid
          floatingElement={
            <SanityImage
              src={imageUrl}
              params={{ "max-h": 1024 }}
              className={styles.mars}
            />
          }
        >
          <div className={styles.content}>
            <h1 className={styles.heroTitle}>{title}</h1>
            <SectionDescription richText={description} color={"#E9DEFF"} />
            <div className={styles.videoHolder}>
              <Video source={videoUrl}></Video>
            </div>
          </div>
        </FloatingGrid>
      </ContentLayout>
    </Section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
