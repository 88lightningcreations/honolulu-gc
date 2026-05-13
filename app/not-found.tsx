
import Link from 'next/link';
import styles from './Home.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          While the page you are looking for no longer exists, Dumore Construction and Remodeling very much does!
        </p>
        <p className={styles.description}>
          Please give us a call at <a href="tel:18082169956">1 (808) 216-9956</a> and we would be happy to talk about your project.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className={styles.card}>
            <h3>&larr; Return Home</h3>
          </Link>
        </div>
      </main>
    </div>
  );
}
