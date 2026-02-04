'use client'
import { useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

const reviews = [
  { text: 'Incredible attention to detail. Our kitchen remodel is stunning!', author: 'John D.' },
  { text: 'Professional, on-time, and on-budget. Highly recommend!', author: 'Jane S.' },
  { text: 'They transformed our backyard into an oasis. We couldn\'t be happier.', author: 'Mike P.' },
  { text: 'The best contractors in Hawaii, hands down.', author: 'Lisa G.' },
    { text: 'From start to finish, the process was seamless and stress-free.', author: 'David H.' },
  { text: 'Our new home addition is perfect. Thank you for your hard work!', author: 'Emily R.' },
  { text: 'High-quality craftsmanship and excellent communication.', author: 'Chris B.' },

];

const Reviews = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const scrollerContent = Array.from(scroller.children);
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scroller.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <section className={styles.reviewsSection}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <div className={styles.scroller} ref={scrollerRef}>
            {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
                <p>"{review.text}"</p>
                <span>- {review.author}</span>
            </div>
            ))}
        </div>
    </section>
  );
};

export default Reviews;
