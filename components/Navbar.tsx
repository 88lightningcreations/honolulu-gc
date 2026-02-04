import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/hawaii-general-contractor-logo.webp"
            alt="Dumore Construction and Remodeling Logo"
            width={150}
            height={50}
            priority
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
