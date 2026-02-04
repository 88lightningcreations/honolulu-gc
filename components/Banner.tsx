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
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Project Details"></textarea>
          <button type="submit">Get an Estimate</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
