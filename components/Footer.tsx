import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>Email: info@dumoreconstruction.com</p>
          <p>Phone: (808) 216-9956</p>
        </div>
        <div className={styles.socialMedia}>
          <h2>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/dumoreconstruction" aria-label="Facebook"><span className="sr-only">Facebook</span>FB</a>
            <a href="https://www.instagram.com/dumoreconstruction" aria-label="Instagram"><span className="sr-only">Instagram</span>IG</a>
            <a href="https://www.linkedin.com/company/dumore-construction" aria-label="LinkedIn"><span className="sr-only">LinkedIn</span>LN</a>
          </div>
        </div>
        <div className={styles.legalLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Dumore Construction. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
