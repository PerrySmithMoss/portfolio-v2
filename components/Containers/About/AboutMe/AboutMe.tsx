import React from "react";
import Image from "next/image";
import styles from "./AboutMe.module.scss";

interface AboutMeProps {}

export const AboutMe: React.FC<AboutMeProps> = ({}) => {
  return (
    <section className={styles.aboutMeWrapper}>
      <div className={styles.aboutMeheader}>
        <div>
          <h2>About Me</h2>
        </div>
      </div>
      <div className={styles.aboutMeContainer}>
        <div>
          <p>
            Howdy! My name is Perry but some people call me Pez. I&apos;m a software
            engineer who has a great passion for taking an idea and transforming it into a
            fully operational piece of software.
          </p>
          <p>
            My enthusiasm for software sparked when I started to work on an app
            called{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/PerrySmithMoss/handover"
              className={styles.inlineLink}
            >
              Handover
            </a>
            , which was part of my dissertation project in university. Since
            then I&apos;ve been hooked on anything software related.
          </p>
          <p>
            Currently, I am working with{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://meadowvalefoods.co.uk/"
              className={styles.inlineLink}
            >
              Meadow Vale Foods
            </a>
            , building them a brand new website and E-commerce portal, which
            will not only make their business more efficent but also their
            customers time.
          </p>
        </div>
        <div className={styles.pictureContainer}>
          <div className={styles.pictureWrapper}>
            {/* @TODO: Add picture of myself */}
            <Image
              src="/assets/images/about/picture.png"
              height={500}
              width={500}
              alt="Picture of Perry Smith-Moss"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
