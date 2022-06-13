import React from "react";
import styles from "./Chip.module.scss";

interface ChipProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  checked: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  onClick,
  disabled,
  checked,
}) => {
  return (
    <button
      style={{ borderColor: checked ? "rgb(34, 139, 230)" : "rgb(40, 45, 65)", color:  disabled ? "gray" : "white" }}
      onClick={() => onClick()}
      className={`${styles.chip} ${disabled ? styles.disabled : styles.allowed}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
