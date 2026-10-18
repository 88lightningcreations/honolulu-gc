import Image from 'next/image';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    (<div className={styles.banner}>
      <Image
        src="/home-remodel-honolulu-general-contractor.webp"
        alt="Stunning living room remodel in a modern Honolulu home, showcasing high-quality craftsmanship and elegant design."
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <div className={styles.textContainer}>
        <h1 className={styles.headline}>Your Vision, Our Expertise</h1>
      </div>
    </div>)
  );
};

export default Banner;
