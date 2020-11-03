import PropTypes from "prop-types";
import Button from "../Button";
import PartnersGrid from "../PartnersGrid.js";
import Section from "../Section";

export default function MainPartnersSection({ title, partners, link }) {
  return (
    <Section id={"main-partners"} bgColor={"see-through"}>
      <h1 className={"centered-text"}>{title}</h1>
      <PartnersGrid partners={partners} />
      <a target={"blank"} referrerPolicy={"no-referrer"} href={link.to}>
        <Button label={link.label} />
      </a>
    </Section>
  );
}

MainPartnersSection.propTypes = {
  title: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.object.isRequired,
};
