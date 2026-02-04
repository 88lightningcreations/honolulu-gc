import styles from './CostEstimator.module.css';

export default function CostEstimator() {
  return (
    <div className={styles.formContainer}>
      <h2>Get a Free Estimate</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit" className={styles.submitButton}>Get My Estimate</button>
      </form>
    </div>
  );
}
