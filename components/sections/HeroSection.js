import PropTypes from "prop-types";
import FloatingGrid from "../FloatingGrid.js";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/HeroSection.module.css";
import SanityImage from "../SanityImage.js";
import Section from "../Section";
import SectionDescription from "../SectionDescription";
import Video from "../Video";

export default function HeroSection({ title, image, description, videoUrl }) {
  return (
    <Section id="hero" className={styles.heroSection}>
      <div className={styles.stars} />

      <ContentLayout>
        <FloatingGrid
          floatingElement={
            <SanityImage
              image={image}
              params={{ h: 1024 }}
              className={styles.mars}
            />
          }
        >
          <h1 className={styles.heroTitle}>{title}</h1>
          <SectionDescription richText={description} color={"#E9DEFF"} />
          <div className={styles.videoHolder}>
            <Video url={videoUrl} />
          </div>
        </FloatingGrid>
      </ContentLayout>
    </Section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.array.isRequired,
  videoUrl: PropTypes.string.isRequired,
};
