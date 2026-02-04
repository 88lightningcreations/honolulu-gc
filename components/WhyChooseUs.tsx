import React from 'react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  {
    title: 'Experienced Team',
    description: 'Our team boasts over 20 years of combined experience, ensuring knowledgeable and skilled execution of your project.',
  },
  {
    title: 'Superior Quality Materials',
    description: 'We select only the finest, durable materials, guaranteeing a high-end finish that stands the test of time.',
  },
  {
    title: 'Unmatched Customer Satisfaction',
    description: 'Your vision is our priority. We collaborate closely with you at every step to ensure we bring your dream home to life.',
  },
  {
    title: 'Transparent & Fair Pricing',
    description: 'We provide comprehensive, detailed estimates with no hidden fees, ensuring clarity and trust from the outset.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
