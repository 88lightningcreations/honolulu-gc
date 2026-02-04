import Banner from '../components/Banner';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Link from 'next/link';
import styles from './Home.module.css';

const galleryImages = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
];

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <WhyChooseUs />
      <section className={styles.galleryPreview}>
        <h2 className={styles.galleryTitle}>Our Recent Work</h2>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.galleryImage}>
              <img src={image} alt={`Preview image ${index + 1}`} />
            </div>
          ))}
        </div>
        <Link href="/gallery" className={styles.galleryLink}>View Full Gallery</Link>
      </section>
      <Reviews />
      <FAQ />
    </main>
  );
}
