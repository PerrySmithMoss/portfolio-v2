import React from "react";
import Image from "next/image";
import styles from "./Education.module.scss";
import { motion as m } from "framer-motion";

interface EducationProps {}

export const Education: React.FC<EducationProps> = ({}) => {
  return (
    <section className={styles.educationWrapper}>
      <m.div
        initial={"offscreen"}
        variants={{
          offscreen: {
            y: 50,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
          },
        }}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.educationHeader}>
          <div>
            <h2>Education</h2>
          </div>
        </div>
        <div className={styles.educationCardWrapper}>
          <div>
            <div className={styles.educationCardFlex}>
              <div className={styles.universityImageContainer}>
                <Image
                  height={60}
                  width={90}
                  src="/assets/images/about/glyndwr-uni.png"
                  alt=""
                />
              </div>
              <div className={styles.cardTextContainer}>
                <div className={styles.cardTextHeading}>
                  <h4>BSc Computer Networks &amp; Security</h4>
                  <span>2017-2020</span>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://glyndwr.ac.uk/"
                  className={styles.cardLink}
                >
                  Wrexham Glyndwr University
                </a>
                <p>
                  Graduated with{" "}
                  <span className={styles.bold}>First-Class </span> Honours.
                </p>
                <div className={styles.cardList}>
                  <p>
                    <span>Course Content: </span>
                    Computer Networks & Security, Computer Science, Problem
                    Solving with Programming, Project Management and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </section>
  );
};
