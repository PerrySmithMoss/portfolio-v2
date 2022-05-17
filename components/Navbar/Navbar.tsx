import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className={styles.navbarHeader}>
      <nav className={styles.navbarNav}>
        <div className={styles.navbarLogo} tabIndex={-1}>
          <Link href="/" aria-label="home">
            <svg
              width={60}
              height={60}
              viewBox="0 0 143 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M133 0H10C4.47715 0 0 4.47715 0 10V118C0 123.523 4.47715 128 10 128H133C138.523 128 143 123.523 143 118V10C143 4.47715 138.523 0 133 0Z"
                fill="#001514"
              />
              <path
                d="M76.152 84.76C71.1173 84.76 66.552 84.077 62.456 82.712C58.4453 81.347 54.6907 79.299 51.192 76.568L55.8 70.552C57.7627 72.003 60.024 73.112 62.584 73.88C65.2293 74.563 67.96 74.904 70.776 74.904C76.3227 74.904 81.144 73.795 85.24 71.576C89.336 69.272 92.4507 66.157 94.584 62.232C96.8027 58.307 97.912 53.827 97.912 48.792C97.912 42.904 96.376 38.0827 93.304 34.328C90.3173 30.488 85.496 28.568 78.84 28.568C75.5973 28.568 72.2693 29.336 68.856 30.872C65.528 32.3227 61.8587 34.5413 57.848 37.528V32.152C61.0907 28.9947 63.9493 26.4773 66.424 24.6C68.8987 22.7227 71.8427 21.2293 75.256 20.12C78.6693 18.9253 82.6373 18.328 87.16 18.328C92.792 18.328 97.656 19.6507 101.752 22.296C105.848 24.9413 108.92 28.44 110.968 32.792C113.101 37.144 114.168 41.88 114.168 47C114.168 53.741 112.76 59.971 109.944 65.688C107.128 71.405 102.861 76.013 97.144 79.512C91.512 83.011 84.5147 84.76 76.152 84.76ZM49.912 114.328C46.7547 114.328 44.4507 113.517 43 111.896C41.5493 110.275 40.824 107.629 40.824 103.96C40.824 99.011 41.5067 91.501 42.872 81.432C44.2373 71.363 46.84 54.637 50.68 31.256L46.712 23.448C52.4293 19.864 57.5067 18.072 61.944 18.072C65.6987 18.072 67.576 20.3333 67.576 24.856C67.576 25.624 67.192 28.3973 66.424 33.176C65.656 37.8693 64.8027 43.117 63.864 48.92C61.3893 64.536 59.5547 76.141 58.36 83.736C57.2507 91.331 56.696 96.664 56.696 99.736C56.696 102.211 56.952 104.387 57.464 106.264C57.976 108.141 58.744 109.72 59.768 111C56.44 113.219 53.1547 114.328 49.912 114.328Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/snippets">Blog</Link>
            </li>
            <li>
              <Link href="/snippets">Snippets</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ol>
          <div>
            <a
              className={styles.navbarButon}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className={styles.navbarMobileMenu}>
          <div>
            <button className={styles.navbarMobileHamburger}>
              {/* TODO: Add the hamburger icon and animation here */}
            </button>
            <aside
              aria-hidden={true}
              tabIndex={-1}
              className={styles.navbarMobileDrawer}
            >
              <nav>
                <ol>
                  <li></li>
                </ol>
                <a
                  className={styles.navbarButon}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
};
