import Button from "../Button";
import styles from "../modules/CTACard.module.css";
import CTACard from "./CTACard";

export default function KitCard({ ...props }) {
  return (
    <CTACard {...props}>
      <div className={styles.buttonRow}>
        {/* <Button label={"Read more"} color={"light"} /> */}
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdaxijLe62ITT3e8w61MwbF3NlCLj2Q5U4f0wv-VwpfTiFDUA/viewform"
        >
          <Button label={"Pre-order"} />
        </a>
      </div>
    </CTACard>
  );
}
