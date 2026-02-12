
import styles from './CostEstimator.module.css';

export default function CostEstimator() {
  return (
    <div className={styles.formContainer}>
      <h2>Renovation & New Build Estimator</h2>
      <form>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input id="name" type="text" placeholder="Name" aria-label="Name" />
        
        <label htmlFor="email" className={styles.label}>Email</label>
        <input id="email" type="email" placeholder="Email" aria-label="Email" />
        
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea id="message" placeholder="Message" aria-label="Message"></textarea>
        
        <button type="submit" className={styles.submitButton}>Get My Estimate</button>
      </form>
    </div>
  );
}
