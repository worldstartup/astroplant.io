import PropTypes from "prop-types";
import { Button } from "../Button";
import PartnersGrid from "../PartnersGrid.js";
import Section from "../Section";

export default function MainPartnersSection({ title, partners }) {
  return (
    <Section id={"main-partners"} bgColor={"see-through"}>
      <h1 className={"centered-text"}>{title}</h1>
      <PartnersGrid partners={partners} />
      <Button label={"Become a partner"} />
    </Section>
  );
}

MainPartnersSection.propTypes = {
  title: PropTypes.string.isRequired,
  partners: PropTypes.arrayOf(PropTypes.object).isRequired,
};
