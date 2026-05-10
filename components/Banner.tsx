import styles from './Banner.module.css';
import CostEstimator from './CostEstimator';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.headline}>Your Vision, Our Expertise</h1>
      </div>
      <div className={styles.estimatorContainer}>
        <CostEstimator preselectedService={''} />
      </div>
    </div>
  );
};

export default Banner;
