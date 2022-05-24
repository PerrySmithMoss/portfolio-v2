import React from "react";
import styles from "./Hero.module.scss";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className={styles.heroContainer}>
      <div>
        <h1>Greetings, my name is</h1>
      </div>
      <div>
        <h2>Perry Smith-Moss.</h2>
      </div>
      <div>
        <p>
          I am a software engineer who specializes in solving business problems
          with the best suited technology. Currently, I am building an
          E-commerce platform for{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://meadowvalefoods.co.uk/"
          >
            Meadow Vale Foods
          </a>
          , which will revolutionise the way they do business.
        </p>
      </div>
      <div>
        <a className={styles.heroButton}>Projects</a>
      </div>
    </section>
  );
};
