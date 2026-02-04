import styles from './Services.module.css';

const services = [
  { name: 'Kitchen Remodeling' },
  { name: 'Bathroom Remodeling' },
  { name: 'Home Additions' },
  { name: 'Outdoor Living Spaces' },
  { name: 'Custom Homes' },
  { name: 'Commercial Construction' },
  { name: 'Siding & Roofing' },
  { name: 'Window & Door Replacement' },
  { name: 'Basement Finishing' },
];

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
