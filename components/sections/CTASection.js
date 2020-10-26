import PropTypes from "prop-types";
import CommunityCard from "../cards/CommunityCard";
import ContributeCard from "../cards/ContributeCard";
import KitCard from "../cards/KitCard";
import FloatingElement from "../FloatingElement";
import ContentLayout from "../layouts/Contentlayout";
import styles from "../modules/CTASection.module.css";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function CTASection({ title, description, ctas }) {
  return (
    <Section id="earthlings">
      <FloatingElement id={"earth"}>
        <img className={styles.earth} src="/images/earth.png" />
      </FloatingElement>

      <ContentLayout>
        <h1 className={styles.title}>{title}</h1>
        <SectionDescription richText={description} color={"#F6FFF5"} />
        <div className={styles.cardRow}>
          <CommunityCard
            cover={"/images/card1.jpg"}
            title={"Community"}
            description={
              "Grow with the community on Slack. Exchange ideas and talk about AstroPlant.\n\n" +
              "The Sky’s the limit!"
            }
          />
          <ContributeCard
            cover={"/images/card3.png"}
            title={"Start hacking"}
            description={
              "You can help develop AstroPlant open-source hardware and software."
            }
          />
          <KitCard
            cover={"/images/card2.png"}
            title={"Grow plants for space"}
            description={
              "Buy an Astroplant Kit, and start growing plants and collecting data to help space exploration move forward."
            }
          />
        </div>
      </ContentLayout>
    </Section>
  );
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  ctas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
