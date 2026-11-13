import React, { useEffect, useState } from "react";
import styles from "./ScrollDown.module.scss";

interface ScrollDownProps {}

export const ScrollDown: React.FC<ScrollDownProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // The scroll cue is only useful while the visitor is at the top of the page.
    const updateVisibility = () => setIsVisible(window.scrollY < 32);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href="#featuredProjects"
      aria-label="Scroll to featured projects"
      className={`${styles.scrollDown} ${isVisible ? "" : styles.hidden}`}
    >
      <svg
        stroke="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className={`${styles.bounceAnimation} ${styles.arrowDownIcon}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M112 268l144 144 144-144M256 392V100"
        />
      </svg>
    </a>
  );
};
