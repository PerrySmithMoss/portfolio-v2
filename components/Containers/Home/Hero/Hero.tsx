import { ScrollDown } from "../../../ScrollDown/ScrollDown";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <header>
        <h1>Perry Smith-Moss</h1>
      </header>
      <h2>Software engineer. Currently building Vordian.</h2>
      <p>
        I’m building a tool to help fitness coaches review client check-ins and
        make sense of the data behind them. Previously, I worked on software at
        WhoCanFixMyCar and Meadow Vale Foods.
      </p>
      <div className={styles.heroButtonContainer}>
        <a href="#featuredProjects" className={styles.heroButton}>
          Explore my work →
        </a>
      </div>
      <div className={styles.heroScrollCue}>
        <ScrollDown />
      </div>
    </section>
  );
};
