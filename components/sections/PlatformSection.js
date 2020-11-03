import Link from "next/link";
import PropTypes from "prop-types";
import Button from "../Button";
import FloatingElement from "../FloatingElement";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/PlatformSection.module.css";
import SanityLinkList from "../SanityLinkList";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function PlatformSection({ title, description, image, links }) {
  return (
    <Section id="platform">
      <FloatingElement id="platform-highlight" percentageHidden={20}>
        <img src={image} className={styles.mockUp} />
      </FloatingElement>

      <ContentLayout>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.chip}>BETA</div>
        </div>
        <SectionDescription color={"#DEE8FF"} richText={description} />
        <SanityLinkList links={links} />
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
