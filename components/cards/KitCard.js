import Button from "../Button";
import styles from "../modules/CTACard.module.css";
import CTACard from "./CTACard";

export default function KitCard({ ...props }) {
  return (
    <CTACard {...props}>
      <div className={styles.buttonRow}>
        <Button label={"Read more"} color={"light"} />
        <Button label={"Pre-order"} />
      </div>
    </CTACard>
  );
}
