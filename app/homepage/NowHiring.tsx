
import React from 'react';
import styles from './NowHiring.module.css';
import Link from 'next/link';

const NowHiring = () => {
  return (
    <section className={styles.nowHiring}>
      <div className={styles.container}>
        <h2 className={styles.title}>Now Hiring: Office Manager</h2>
        <p className={styles.location}>Honolulu, HI</p>
        <p className={styles.jobType}>Part-Time (20-25 hours/week) | Flexible Hours</p>

        <div className={styles.details}>
          <p>We are seeking an experienced Office Manager to oversee our administrative and financial operations. This role requires a high level of trust and responsibility, as you will be the designated trustee for handling sensitive company information and financial documents.</p>
          <p>To apply, please call us at <a href="tel:+18082169956">+1 (808) 216-9956</a>.</p>
          
          <Link href="/now-hiring" className={styles.ctaButton}>
            Learn More & Apply
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NowHiring;
