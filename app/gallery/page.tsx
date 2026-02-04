import Navbar from '../../components/Navbar';
import styles from './page.module.css';

const images = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/8.jpg',
];

const GalleryPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>Our Work</h1>
        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image} alt={`Project image ${index + 1}`} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
