import PropTypes from "prop-types";
import AnimateInView from "../AnimateInView";
import AnimateListInView from "../AnimateListInView";
import CommunityCard from "../cards/CommunityCard";
import ContributeCard from "../cards/ContributeCard";
import KitCard from "../cards/KitCard";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/CTASection.module.css";
import SanityImage from "../SanityImage";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function CTASection({ title, description, image, ctas }) {
  return (
    <Section id="earthlings">
      <ContentLayout>
        <AnimateInView className={styles.earth} animation="slideInLeft">
          <SanityImage image={image} params={{ h: 1024 }} />
        </AnimateInView>

        <AnimateListInView
          itemsAnimation={"fadeInBottom"}
          listAnimation={"list"}
        >
          <h1 className={styles.title}>{title}</h1>
          <SectionDescription richText={description} color={"#F6FFF5"} />
        </AnimateListInView>

        <AnimateListInView
          itemsAnimation={"fadeInBottom"}
          listAnimation={"list"}
          className={styles.cardRow}
        >
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
        </AnimateListInView>
      </ContentLayout>
    </Section>
  );
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  description: PropTypes.array.isRequired,
  ctas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
