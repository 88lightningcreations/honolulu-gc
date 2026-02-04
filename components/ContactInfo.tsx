import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoBlock}>
        <h4>Address</h4>
        <p>123 Construction Ave, Suite 100</p>
        <p>Metropolis, ST 12345</p>
      </div>
      <div className={styles.infoBlock}>
        <h4>Email</h4>
        <p>contact@constructco.com</p>
      </div>
      <div className={styles.infoBlock}>
        <h4>Phone</h4>
        <p>(123) 456-7890</p>
      </div>
      <div className={styles.infoBlock}>
        <h4>Business Hours</h4>
        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
        <p>Saturday: By Appointment</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactInfo;
