import Navbar from '../../components/Navbar';
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>About ConstructCo</h1>
        <div className={styles.aboutContent}>
          <div className={styles.textSection}>
            <p>
              Founded in 2005, ConstructCo has been a leading force in the construction industry,
              delivering high-quality projects that stand the test of time. Our mission is to build
              more than just structures; we build lasting relationships with our clients based on
              trust, integrity, and a commitment to excellence.
            </p>
            <p>
              Our team is comprised of experienced professionals who are passionate about what they do.
              From our project managers to our skilled laborers, everyone at ConstructCo is dedicated
              to ensuring every project is completed to the highest standards, on time and within budget.
            </p>
          </div>
          <div className={styles.imageSection}>
            {/* Placeholder for an image of the team or a flagship project */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>

        <div className={styles.missionVision}>
          <div className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
              To provide exceptional construction services with a focus on quality, safety, and customer
              satisfaction. We strive to exceed expectations and deliver projects that our clients can be
              proud of.
            </p>
          </div>
          <div className={styles.vision}>
            <h2>Our Vision</h2>
            <p>
              To be the most trusted and respected construction company in the region, known for our
              innovation, integrity, and commitment to our community.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
