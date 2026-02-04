import React from 'react';
import styles from './OurServices.module.css';

const services = [
  {
    title: 'New Construction',
    description: 'Building your vision from the ground up. We handle every aspect of new home construction, from initial design to final inspection.',
  },
  {
    title: 'Home Remodeling',
    description: 'Transforming your current house into your dream home. We specialize in kitchen, bathroom, and whole-home renovations.',
  },
  {
    title: 'Kitchen & Bath',
    description: 'Creating beautiful, functional kitchens and bathrooms that are tailored to your lifestyle and taste.',
  },
  {
    title: 'Additions',
    description: 'Expanding your living space to accommodate your growing needs. We build seamless additions that blend perfectly with your existing home.',
  },
  {
    title: 'Storm Damage Repair',
    description: 'Providing fast, reliable repairs to get your home back to pre-storm condition. We work with all insurance companies.',
  },
  {
    title: 'Modular Homes',
    description: 'Offering modern, high-quality modular homes as an efficient and cost-effective alternative to traditional construction.',
  },
];

const OurServices: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
