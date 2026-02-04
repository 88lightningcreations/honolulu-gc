"use client";
import { motion, Variants } from 'framer-motion';
import styles from './AnimatedWhyChooseUs.module.css';

const reasons = [
  { title: 'Experienced Team', description: 'Our team has over 20 years of experience in the construction industry.' },
  { title: 'Quality Materials', description: 'We use only the highest quality materials to ensure a long-lasting finish.' },
  { title: 'Customer Satisfaction', description: 'We work closely with our clients to ensure their vision becomes a reality.' },
  { title: 'Transparent Pricing', description: 'We provide detailed estimates with no hidden costs.' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const AnimatedWhyChooseUs = () => {
  return (
    <motion.section 
      className={styles.whyChooseUsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className={styles.title}>Why Choose Us?</h2>
      <motion.div className={styles.reasonsGrid}>
        {reasons.map((reason, index) => (
          <motion.div 
            key={index} 
            className={styles.reasonCard}
            variants={cardVariants}
          >
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AnimatedWhyChooseUs;
