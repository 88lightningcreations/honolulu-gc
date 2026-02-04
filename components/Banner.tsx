import styles from './Banner.module.css';
import CostEstimator from './CostEstimator';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
      </div>
      <CostEstimator />
    </div>
  );
};

export default Banner;
