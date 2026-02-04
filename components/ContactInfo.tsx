import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoBlock}>
        <h4>Business Name</h4>
        <p>Dumore Construction and Remodeling</p>
      </div>
      <div className={styles.infoBlock}>
        <h4>Address</h4>
        <p>1253 S Beretania St. #1501</p>
        <p>Honolulu, HI 96814, United States</p>
      </div>
      <div className={styles.infoBlock}>
        <h4>Phone</h4>
        <p>+18082169956</p>
      </div>
    </div>
  );
};

export default ContactInfo;
