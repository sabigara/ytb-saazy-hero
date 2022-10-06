import styles from "./HeroSection.module.scss";
import PrimaryButton from "./PrimaryButton";
import Stats from "./Stats";
import SubtleButton from "./SubtleButton";
import { ReactComponent as ArrowRightSvg } from "../assets/arrow-right.svg";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <a href="#" className={styles.tagLink}>
          New feature has come <ArrowRightSvg />
        </a>
        <div className={styles.mainCopy}>
          <div>Grow your business</div>
          <div>with your customers</div>
        </div>
        <div className={styles.subCopy}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </div>
        <div className={styles.ctas}>
          <PrimaryButton>Get started for free</PrimaryButton>
          <SubtleButton>Request demo</SubtleButton>
        </div>
        <Stats
          items={[
            {
              term: "Revenue increase",
              data: "$3k+",
            },
            {
              term: "Happy customers",
              data: "5k+",
            },
            {
              term: "Productivity gain",
              data: "20%",
            },
          ]}
          className={styles.stats}
        />
      </div>
      <div className={styles.right}>
        <img src="/hero-image.png" className={styles.heroImage} />
      </div>
    </section>
  );
}
