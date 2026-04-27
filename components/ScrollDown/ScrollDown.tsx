import Link from "next/link";
import React from "react";
import styles from "./ScrollDown.module.scss";

interface ScrollDownProps {}

export const ScrollDown: React.FC<ScrollDownProps> = () => {
  return (
    <Link href="/#featuredProjects" className={styles.scrollDown}>
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
    </Link>
  );
};