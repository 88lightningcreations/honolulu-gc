import Link from 'next/link';
import styles from './OurServices.module.css';
import { services } from '../lib/services';

const OurServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link href={service.link} key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.readMoreBtn}>
                  Read More <span className={styles.arrow}>&rarr;</span>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
