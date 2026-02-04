import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';
import ContactInfo from '../../components/ContactInfo';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We&apos;d love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <div className={styles.contentWrapper}>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
          <div className={styles.infoContainer}>
            <ContactInfo />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
