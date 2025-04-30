"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Donate", url: "/donate" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Young GP
      </Link>

      {/* Desktop Links */}
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}
        onClick={() => setMenuOpen(false)} // close menu on click
      >
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.mobileLink}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
