import React from "react";
import { useGlobalUIContext } from "../../context/GlobalUI.context";
import styles from "../../styles/Home.module.scss";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isMobileMenuDrawerOpen } = useGlobalUIContext();
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <main
        className={
          isMobileMenuDrawerOpen
            ? `${styles.mainWrapperBlur} ${styles.mainWrapper}`
            : styles.mainWrapper
        }
      >
        {children}
        <Footer />
      </main>
    </div>
  );
};
