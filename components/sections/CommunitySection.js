import { Button } from "../Button";
import FloatingElement from "../FloatingElement";
import { ImageGrid } from "../ImageGrid";
import ContentLayout from "../layouts/Contentlayout";
import styles from "../modules/CommunitySection.module.css";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function CommunitySection(props = { data }) {
  return (
    <Section id="community" className={styles.communitySection}>
      <FloatingElement id="community-highlights" percentageHidden={10}>
        <ImageGrid
          id={"community-highlights"}
          images={props.data.communityImages}
        />
      </FloatingElement>

      <ContentLayout>
        <h1 className={styles.title}>{props.data.communityTitle}</h1>
        <SectionDescription
          color={"#DEE8FF"}
          richText={props.data.communityDescription}
        />
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
