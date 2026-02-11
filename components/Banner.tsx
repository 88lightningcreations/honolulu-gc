
import styles from './Banner.module.css';
import CostEstimator from './CostEstimator';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h1 className={styles.headline}>Your Vision, Our Expertise</h1>
      </div>
      <div className={styles.estimatorContainer}>
        <CostEstimator />
      </div>
    </div>
  );
};

export default Banner;
