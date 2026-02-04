import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h3>ConstructCo</h3>
          <p>Building Your Future, Today.</p>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>123 Construction Ave, Suite 100</p>
          <p>Metropolis, ST 12345</p>
          <p>Email: contact@constructco.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.socials}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            {/* Add social icons here */}
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} ConstructCo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
