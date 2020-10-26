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
          {ctas.map((cta) => {
            if (cta.slug === "contribute") {
              return (
                <ContributeCard
                  key={cta._id}
                  cover={cta.cover}
                  title={cta.title}
                  description={cta.description}
                />
              );
            }

            if (cta.slug === "kit") {
              return (
                <KitCard
                  key={cta._id}
                  cover={cta.cover}
                  title={cta.title}
                  description={cta.description}
                />
              );
            }

            if (cta.slug === "community") {
              return (
                <CommunityCard
                  key={cta._id}
                  cover={cta.cover}
                  title={cta.title}
                  description={cta.description}
                />
              );
            }
          })}
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
