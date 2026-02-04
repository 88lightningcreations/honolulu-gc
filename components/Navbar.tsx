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
            alt="General Contracting Company Hawaii Logo"
            width={150}
            height={50}
            priority
          />
        </Link>
      </div>
      <div className={styles.contact}>
        <Link href="/contact">
          <button className={styles.contactButton}>Contact</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
