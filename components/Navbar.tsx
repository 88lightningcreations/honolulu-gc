'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hawaii-general-contractor-logo.webp"
              alt="Dumore Construction and Remodeling Logo"
              width="150"
              height="50"
            />
        </Link>
      </div>
      <div className={styles.contact}>
        <a href="tel:+18082169956" className={styles.phoneNumber}>+1 (808) 216-9956</a>
      </div>
    </nav>
  );
};

export default Navbar;
