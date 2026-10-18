'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src="/hawaii-general-contractor-logo.webp"
              alt="Dumore Construction and Remodeling Logo"
              width={150}
              height={50}
              priority
            />
        </Link>
      </div>
      <div className="contact">
        <a href="tel:+18082169956" className="phoneNumber">+1 (808) 216-9956</a>
      </div>
    </nav>
  );
};

export default Navbar;
