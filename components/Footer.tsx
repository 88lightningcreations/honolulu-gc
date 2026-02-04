import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <h3>Dumore Construction and Remodeling</h3>
          <p>Building Your Future, Today.</p>
        </div>
        <div className={styles.links}>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h4>Contact Us</h4>
          <p>1253 S Beretania St. #1501, Honolulu, HI 96814, United States</p>
          <p>Phone: +18082169956</p>
        </div>
        <div className={styles.socials}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IN</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Dumore Construction and Remodeling. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
