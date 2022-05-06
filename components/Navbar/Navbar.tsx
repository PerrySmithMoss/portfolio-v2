import React from 'react'
import styles from "./navbar.module.scss"

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
            <header className={styles.navbarHeader}>
                Yo
            </header>
        );
}