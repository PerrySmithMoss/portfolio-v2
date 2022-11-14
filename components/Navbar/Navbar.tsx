import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Navbar.module.scss";
import { motion as m } from "framer-motion";
import { useGlobalUIContext } from "../../context/GlobalUI.context";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const { isMobileMenuDrawerOpen, setIsMobileMenuDrawerOpen } =
    useGlobalUIContext();

  return (
    <header className={styles.navbarHeader}>
      <nav className={styles.navbarNav}>
        <div className={styles.navbarLogo} tabIndex={-1}>
          <Link href="/" aria-label="home">
            <m.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="8"
                  width="40"
                  height="40"
                  rx="9"
                  stroke="#00FFFF"
                  strokeWidth="2"
                />
                <path
                  d="M21.752 32.26C20.5947 32.26 19.5307 32.092 18.56 31.756C17.5893 31.4013 16.7027 30.8973 15.9 30.244L17.16 29.432C17.6267 29.768 18.168 30.02 18.784 30.188C19.4 30.356 20.0253 30.44 20.66 30.44C21.948 30.44 23.068 30.1787 24.02 29.656C24.972 29.1333 25.6907 28.4147 26.176 27.5C26.68 26.5853 26.932 25.5493 26.932 24.392C26.932 22.992 26.5773 21.8533 25.868 20.976C25.1773 20.08 24.0293 19.632 22.424 19.632C21.6773 19.632 20.912 19.8093 20.128 20.164C19.344 20.5 18.4947 21.004 17.58 21.676V20.92C18.2893 20.192 18.9147 19.6133 19.456 19.184C19.9973 18.7547 20.6413 18.4093 21.388 18.148C22.1347 17.868 23.0027 17.728 23.992 17.728C25.2053 17.728 26.2507 18.0173 27.128 18.596C28.0053 19.1747 28.668 19.94 29.116 20.892C29.5827 21.844 29.816 22.88 29.816 24C29.816 25.512 29.5173 26.8933 28.92 28.144C28.3413 29.376 27.4453 30.3747 26.232 31.14C25.0187 31.8867 23.5253 32.26 21.752 32.26ZM15.984 38.728C15.424 38.728 15.0133 38.5787 14.752 38.28C14.4907 37.9813 14.36 37.496 14.36 36.824C14.36 35.6667 14.5187 33.912 14.836 31.56C15.1533 29.208 15.7507 25.3627 16.628 20.024L15.9 18.624C16.964 17.9893 17.8693 17.672 18.616 17.672C19.288 17.672 19.624 18.0733 19.624 18.876C19.624 19.0067 19.5493 19.5293 19.4 20.444C19.2693 21.34 19.1107 22.3667 18.924 23.524C18.42 26.66 18 29.3293 17.664 31.532C17.3467 33.716 17.188 35.1813 17.188 35.928C17.188 36.3947 17.2347 36.8147 17.328 37.188C17.44 37.5613 17.5987 37.8787 17.804 38.14C17.1693 38.532 16.5627 38.728 15.984 38.728Z"
                  fill="#00FFFF"
                />
              </svg>
            </m.a>
          </Link>
        </div>
        <div className={styles.navbarLinks}>
          <ol>
              {navLinks.map((link, i) => (
                <m.li
                  key={link.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href={link.url}>
                    <a
                      className={
                        router.pathname === link.url ? styles.active : ""
                      }
                    >
                      {link.name}.
                    </a>
                  </Link>
                </m.li>
              ))}
          </ol>
        </div>
          <div className={styles.navbarLinksWrapper}>
            <m.a
              href="https://github.com/PerrySmithMoss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className={styles.navbarIcon}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#b1bdc5"
                // fill="#FFFFFF"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </m.a>

            <m.a
              href="https://www.linkedin.com/in/perrysmithmoss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className={styles.navbarIcon}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                // fill="#FFFFFF"
                fill="#b1bdc5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </m.a>

            <div>
              <m.a
                className={styles.navbarButon}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Resume
              </m.a>
            </div>
          </div>
        <div className={styles.navbarMobileMenu}>
          <div>
            <button
              aria-label="Mobile Menu"
              className={styles.navbarMobileHamburger}
            >
              <label htmlFor="check">
                <input
                  onClick={() =>
                    setIsMobileMenuDrawerOpen(!isMobileMenuDrawerOpen)
                  }
                  type="checkbox"
                  id="check"
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </button>
            <aside
              aria-hidden={isMobileMenuDrawerOpen ? "true" : "false"}
              tabIndex={isMobileMenuDrawerOpen ? 1 : -1}
              className={
                isMobileMenuDrawerOpen
                  ? styles.navbarMobileDrawerActive
                  : styles.navbarMobileDrawer
              }
            >
              <nav>
                <ol>
                  <li>
                    <Link href="/">
                      <a
                        className={
                          router.pathname === "/" ? (styles.active as any) : ""
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a
                        className={
                          router.pathname === "/projects"
                            ? (styles.active as any)
                            : ""
                        }
                      >
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a
                        className={
                          router.pathname === "/blog"
                            ? (styles.active as any)
                            : ""
                        }
                      >
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/snippets">
                      <a
                        className={
                          router.pathname === "/snippets"
                            ? (styles.active as any)
                            : ""
                        }
                      >
                        Snippets
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a
                        className={
                          router.pathname === "/about"
                            ? (styles.active as any)
                            : ""
                        }
                      >
                        About
                      </a>
                    </Link>
                  </li>
                </ol>
                <a
                  className={styles.navbarMobileButon}
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

const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    name: "Snippets",
    url: "/snippets",
  },
  {
    id: 5,
    name: "About",
    url: "/about",
  },
];
