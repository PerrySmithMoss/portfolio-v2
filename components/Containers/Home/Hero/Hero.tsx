import React from "react";
import { Button } from "../../../Button/Button/Button";
import { SeeAll } from "../../../Button/SeeAll/SeeAll";
import styles from "./Hero.module.scss";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <section className={styles.heroContainer}>
      <div>
        <h1>Greetings, my name is</h1>
      </div>
      <div>
        <h2>Perry Smith Moss.</h2>
      </div>
      <div>
        <p>
          I&apos;m a software engineer who specializes in solving business problems
          with the best suited technology. Currently, I am building an
          E-commerce platform for{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://meadowvalefoods.co.uk/"
            className={styles.heroLink}
          >
            Meadow Vale Foods
          </a>
          , which will revolutionise the way they do business.
        </p>
      </div>
      <div className={styles.heroButtonContainer}>
        {/* <div>
          <svg
            width={10}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.334 6.4L4.842 9.314c-.329.384-.32 1.014 0 1.398.328.384.858.384 1.186 0l3.864-4.518a1.101 1.101 0 000-1.388L6.028.288c-.328-.384-.858-.384-1.186 0a1.07 1.07 0 00-.247.694c0 .26.089.51.247.694l2.5 2.924H.9a.9.9 0 100 1.8h6.434z"
              fill="white"
            ></path>
          </svg>
          <a className={styles.heroButtonAccent}>About me</a>
        </div> */}
        <div>
          <a className={styles.heroButton}>Projects</a>
        </div>
      </div>
    </section>
  );
};
