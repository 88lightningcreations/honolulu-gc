
import React from 'react';
import styles from './BusinessForSale.module.css';
import Link from 'next/link';

const BusinessForSale = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>A Unique Investment Opportunity</h2>
      <p className={styles.subtitle}>
        The established and reputable general contracting business you see here is for sale. This is a rare chance to acquire a premier, turnkey operation in Hawaii.
      </p>
      <Link href="/business-opportunity" className={styles.button}>
        Learn More
      </Link>
    </div>
  );
};

export default BusinessForSale;