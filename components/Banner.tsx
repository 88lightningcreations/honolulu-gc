import React from 'react';
import styles from './Banner.module.css';
import CostEstimator from './CostEstimator';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>Get a Free Estimate Today</h1>
        <p className={styles.subtitle}>Fill out the form below to get a free, no-obligation estimate for your next project.</p>
      </div>
      <div className={styles.estimatorContainer}>
        <CostEstimator preselectedService='' />
      </div>
    </div>
  );
};

export default Banner;
