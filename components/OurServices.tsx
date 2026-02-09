
import Link from 'next/link';
import styles from './OurServices.module.css';
import { services } from '../lib/services';

const OurServices = () => {
  return (
    <section className={styles.ourServices}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <Link href={service.link} key={service.title} className={styles.serviceCard}>

            <div className={styles.serviceIcon}>
              <service.icon />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
