
import styles from './Banner.module.css';
import CostEstimator from './CostEstimator';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className={styles.headline}>Your Vision, Our Expertise</h1>
        <p className={styles.description}>
          From concept to completion, we&apos;re dedicated to bringing your dream project to life. 
          Experience the difference of working with a team that values quality, craftsmanship, and you.
        </p>
        <button className={styles.ctaButton}>Get a Free Quote</button>
      </div>
      <CostEstimator />
    </div>
  );
};

export default Banner;
