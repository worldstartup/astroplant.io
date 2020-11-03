import PropTypes from "prop-types";
import FloatingGrid from "../FloatingGrid.js";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/PlatformSection.module.css";
import SanityLinkList from "../SanityLinkList";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function PlatformSection({ title, description, image, links }) {
  return (
    <Section id="platform">
      <ContentLayout>
        <FloatingGrid
          floatingElement={<img src={image} className={styles.mockUp} />}
        >
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.chip}>BETA</div>
          </div>
          <SectionDescription color={"#DEE8FF"} richText={description} />
          <SanityLinkList links={links} />
        </FloatingGrid>
      </ContentLayout>
    </Section>
  );
}

PlatformSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
