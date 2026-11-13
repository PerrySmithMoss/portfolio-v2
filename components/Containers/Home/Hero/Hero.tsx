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
      <h1>Perry Smith-Moss</h1>
    </header>,
    
    <div key="two">
      <h2>Software engineer. Currently building Vordian.</h2>
    </div>,
    
    <div key="three">
      <p>
        I’m building a tool to help fitness coaches review client check-ins and
        make sense of the data behind them. Previously, I worked on software at
        WhoCanFixMyCar and Meadow Vale Foods.
      </p>
    </div>,
    
    <div key="four" className={styles.heroButtonContainer}>
      <Link href="/projects" className={styles.heroButton}>
        Explore my work →
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
