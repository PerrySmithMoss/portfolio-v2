import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.scss";
import { ScrollDown } from "../../../ScrollDown/ScrollDown";
import { motion as m } from "framer-motion";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <div>
      <h1>Greetings, my name is</h1>
    </div>
  );

  const two = (
    <div>
      <h2>Perry Smith Moss.</h2>
    </div>
  );

  const three = (
    <div>
      <p>
        I&apos;m a software engineer who specializes in solving business
        problems with the best suited technology. Currently, I am building an
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
  );

  const four = (
    <div className={styles.heroButtonContainer}>
      <div>
        <Link href="/projects">
          <a className={styles.heroButton}>Projects</a>
        </Link>
      </div>
    </div>
  );

  const five = <ScrollDown />;

  const items = [one, two, three, four, five];

  return (
    <section className={styles.heroContainer}>
      {isMounted &&
        items.map((item, i) => (
          <m.div
            key={i}
            initial={{ x: i === 4 ? 0 : 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {item}
          </m.div>
        ))}
    </section>
  );
};
