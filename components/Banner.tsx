import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <h1>Reliable Home Remodeling Contractor for Quality Renovation in Hawaii</h1>
      </div>
      <div className={styles.formContainer}>
        <h2>Remodeling Cost Estimator</h2>
        <form>
          <input type="text" placeholder="Name" aria-label="Name" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <input type="tel" placeholder="Phone" aria-label="Phone" />
          <textarea placeholder="Project Details" aria-label="Project Details"></textarea>
          <button type="submit" className={styles.submitButton}>Get an Estimate</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
