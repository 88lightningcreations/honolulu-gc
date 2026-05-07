
'use client';
import styles from './page.module.css';
import Link from 'next/link';
import { services } from '@/app/lib/services';

const ServicesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          We offer a wide range of construction services to meet the diverse needs of our clients.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            return (
              <Link key={index} href={`/services/${service.slug}`} legacyBehavior>
                <a className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
