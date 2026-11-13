import { motion as m } from "framer-motion";
import React from "react";
import styles from "./AboutMe.module.scss";

interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = ({}) => {
  return (
    <section className={styles.aboutMeWrapper}>
      <m.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.aboutMeheader}>
          <div>
            <h2>About Me</h2>
          </div>
        </div>
        <div className={styles.aboutMeContainer}>
          <div>
            <p>
              I’m Perry, a software engineer. I also go by Pez. I enjoy
              taking an idea and working through the details that turn it into
              useful software.
            </p>
            <p>
              I got interested in building software while working on{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/PerrySmithMoss/handover"
                className={styles.inlineLink}
              >
                Handover
              </a>
              , my university dissertation project: a messaging app for
              healthcare professionals to manage patient handovers.
            </p>
            <p>
              My first role was at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://meadowvalefoods.co.uk/"
                className={styles.inlineLink}
              >
                Meadow Vale Foods
              </a>
              , where I worked on their website and e-commerce portal. I then
              joined{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.whocanfixmycar.com/"
                className={styles.inlineLink}
              >
                WhoCanFixMyCar
              </a>
              , working on web applications for drivers and mechanics.
            </p>
            <p>
              Since then, I’ve been working on projects of my own. My main focus
              now is{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vordian.app/"
                className={styles.inlineLink}
              >
                Vordian
              </a>
              , a tool to help fitness coaches review client check-ins from
              Google Sheets. It brings together trends, AI summaries and the
              data behind them. The aim is to make reviews easier while leaving
              the decisions with the coach. I’m now looking for feedback from
              coaches to understand how it could fit into their day-to-day work.
            </p>
          </div>
        </div>
      </m.div>
    </section>
  );
};
