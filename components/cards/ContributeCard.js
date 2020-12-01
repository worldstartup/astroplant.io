import Button from "../Button";
import styles from "../modules/CTACard.module.css";
import CTACard from "./CTACard";

export default function ContributeCard({ ...props }) {
  return (
    <CTACard {...props}>
      <div className={styles.buttonRow}>
        <a href="mailto:thieme@astroplant.io">
          <Button label={"Contact"} color={"light"} />
        </a>
      </div>
    </CTACard>
  );
}
