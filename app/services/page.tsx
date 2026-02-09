
'use client';
import Navbar from '../../components/Navbar';
import styles from './page.module.css';
import Link from 'next/link';
import { services } from '../../lib/services';

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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} href={service.link} legacyBehavior>
                <a className={styles.serviceCard}>
                  <div className={styles.serviceIcon}><Icon size={50} /></div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
