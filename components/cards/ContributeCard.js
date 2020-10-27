import Button from "../Button";
import styles from "../modules/CTACard.module.css";
import CTACard from "./CTACard";

export default function ContributeCard({ ...props }) {
  return (
    <CTACard {...props}>
      <div className={styles.buttonRow}>
        <Button label={"Read more"} bgColor={"white"} color={"black"} />
        <Button label={"Contribute"} bgColor={"secondary"} />
      </div>
    </CTACard>
  );
}
