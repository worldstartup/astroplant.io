import { Button } from "../Button";
import { PartnersGrid } from "../PartnersGrid.js";
import Section from "../Section";

export default function MainPartnersSection(props = { data }) {
  return (
    <Section id={"main-partners"} bgColor={"see-through"}>
      <h1 className={"centered-text"}>{props.data.supportersTitle}</h1>
      <PartnersGrid partnersLogo={props.data.partnerImages} />
      <Button label={"Become a partner"} />
    </Section>
  );
}
