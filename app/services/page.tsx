import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import { FaHardHat, FaDraftingCompass, FaCity } from 'react-icons/fa';

const services = [
  {
    icon: <FaHardHat size={50} />,
    title: 'General Contracting',
    description: 'Overall management of your construction project, ensuring it is completed on time and within budget.',
  },
  {
    icon: <FaDraftingCompass size={50} />,
    title: 'Design-Build',
    description: 'A streamlined process where we handle both the design and construction phases of your project.',
  },
  {
    icon: <FaCity size={50} />,
    title: 'Commercial Construction',
    description: 'Construction services for commercial buildings, including offices, retail spaces, and more.',
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          We offer a wide range of construction services to meet the diverse needs of our clients.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
