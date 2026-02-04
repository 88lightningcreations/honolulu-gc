import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.maxWidthWrapper}>
        <h2 className={styles.title}>Ready to Build Your Dream Home?</h2>
        <p className={styles.subtitle}>Let&apos;s start the conversation. Contact us today for a free consultation.</p>
        <button className={styles.ctaButton}>Get a Free Quote</button>
      </div>
    </section>
  );
};

export default CallToAction;
