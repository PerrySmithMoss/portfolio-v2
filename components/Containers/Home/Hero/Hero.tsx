import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ScrollDown } from "../../../ScrollDown/ScrollDown";
import styles from "./Hero.module.scss";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const items = [
    <header key="one">
      <h1>Greetings, my name is</h1>
    </header>,
    
    <div key="two">
      <h2>Perry Smith-Moss.</h2>
    </div>,
    
    <div key="three">
      <p>
        I am a dynamic software engineer, dedicated to unravelling complex
        business challenges by leveraging cutting-edge technology. At this
        moment, I am meticulously crafting a transformative driver and mechanic
        portal for{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.whocanfixmycar.com"
          className={styles.heroLink}
        >
          WhoCanFixMyCar
        </a>
        .
      </p>
    </div>,
    
    <div key="four" className={styles.heroButtonContainer}>
      <Link href="/projects" className={styles.heroButton}>
        Projects
      </Link>
    </div>,
    
    <div key="five">
      <ScrollDown />
    </div>
  ];

  return (
    <section className={styles.heroContainer}>
      {isMounted &&
        items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ x: i === 4 ? 0 : 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: i * 0.1,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {item}
          </motion.div>
        ))}
    </section>
  );
};