import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <p>Email: info@dumoreconstruction.com</p>
          <p>Phone: (808) 216-9956</p>
        </div>
        <div className={styles.socialMedia}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">LN</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Dumore Construction. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
