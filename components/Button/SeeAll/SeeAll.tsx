import React from "react";
import styles from "./SeeAll.module.scss";

interface SeeAllProps {
  buttonText: string;
  colour?: string;
  padding?: string;
}

export const SeeAll: React.FC<SeeAllProps> = ({
  buttonText,
  colour,
  padding,
}) => {
  return (
    <a
      style={{
        color: colour ? colour : "#00FFFF",
        padding: padding && padding,
      }}
      className={styles.arrow}
    >
      {buttonText}
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
          fill={colour ? colour : "#00FFFF"}
        ></path>
      </svg>
    </a>
  );
};
