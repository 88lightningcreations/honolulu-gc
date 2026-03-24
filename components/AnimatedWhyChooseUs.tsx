import styles from './AnimatedWhyChooseUs.module.css';

const reasons = [
  { title: 'Experienced Team', description: 'Our team has over 20 years of experience in the construction industry.' },
  { title: 'Quality Materials', description: 'We use only the highest quality materials to ensure a long-lasting finish.' },
  { title: 'Customer Satisfaction', description: 'We work closely with our clients to ensure their vision becomes a reality.' },
  { title: 'Transparent Pricing', description: 'We provide detailed estimates with no hidden costs.' },
];

const AnimatedWhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <h2 className={styles.title}>Why Choose Us?</h2>
      <div className={styles.reasonsGrid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.reasonCard}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedWhyChooseUs;
