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
      <h2>Perry Smith-Moss.</h2>
    </div>
  );

  const three = (
    <div>
      <p>
        I am a dynamic software engineer, dedicated to unravelling complex
        business challenges by leveraging cutting-edge technology. At this
        moment, I am meticulously crafting a transformative driver and mechanic
        portal for{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.whocanfixmycar.com"
          className={styles.heroLink}
        >
          WhoCanFixMyCar
        </a>
        .
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
