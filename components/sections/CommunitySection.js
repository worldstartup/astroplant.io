import PropTypes from "prop-types";
import { Button } from "../Button";
import FloatingElement from "../FloatingElement";
import { ImageGrid } from "../ImageGrid";
import ContentLayout from "../layouts/Contentlayout";
import styles from "../modules/CommunitySection.module.css";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function CommunitySection({ title, description, images }) {
  return (
    <Section id="community" className={styles.communitySection}>
      <FloatingElement id="community-highlights" percentageHidden={10}>
        <ImageGrid id={"community-highlights"} images={images} />
      </FloatingElement>

      <ContentLayout>
        <h1 className={styles.title}>{title}</h1>
        <SectionDescription color={"#DEE8FF"} richText={description} />
        <div className={styles.buttons}>
          <Button label={"Learn More"} bgColor={"white"} color={"black"} />
          <Button
            className={styles.marginButton}
            label={"Join the community"}
          />
        </div>
      </ContentLayout>
    </Section>
  );
}

CommunitySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
