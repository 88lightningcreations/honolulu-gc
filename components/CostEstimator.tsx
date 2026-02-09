import styles from './CostEstimator.module.css';

export default function CostEstimator() {
  return (
    <div className={styles.formContainer}>
      <h2>Renovation & New Build Estimator</h2>
      <form>
        <input type="text" placeholder="Name" aria-label="Name" />
        <input type="email" placeholder="Email" aria-label="Email" />
        <textarea placeholder="Message" aria-label="Message"></textarea>
        <button type="submit" className={styles.submitButton}>Get My Estimate</button>
      </form>
    </div>
  );
}
