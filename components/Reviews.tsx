'use client'
import { useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

const reviews = [
  { text: 'Our experience with Dumore was outstanding. Miguel brought a high level of expertise and professionalism to our bathroom remodel. Communication was prompt and clear. We are very pleased with the quality of the work and the timely manner in which it was done. We would definitely call on them again.', author: 'Yoshiko Chino', date: '1/15/2025' },
  { text: 'I had a wonderful experience with Dumore! Deb was the project manager for a rental condo kitchen and bath remodel. She executed the job perfectly, quickly, and was a pleasure to work with. I was able to get the unit back on the market a month sooner than I was expecting. Highly recommend!', author: 'Holly', date: '11/05/2024' },
  { text: 'Steve, Miguel, and the Dumore team completed an addition to my grandmother\'s house. Since she isn\'t familiar with doing reviews , I\'ll be leaving a review on her behalf. The standout feature of the addition was undoubtedly the bathroom; Miguel\'s design and craftsmanship were impeccable. Despite my thorough inspection, I couldn\'t find a single flaw in the workmanship, which speaks volumes about their attention to detail. Overall, the team far exceeded our expectations, and their communication skills were exceptional. I wholeheartedly recommend them.', author: 'JJ Pacheco', date: '09/27/2024' },
  { text: 'Miguel and his crew with Dumore construction and remodeling did an excellent job at remodeling my master bath and kitchen. Their attention to detail and great customer service from beginning to end is what impressed me the most. I definitely recommend this company and will be using them again in the near future.', author: 'Jimary Quinones', date: '08/12/2024' },
  { text: 'I\'ve known of this business and watched them grow since their inception. Their quality work is top notch and the people are professional, likable, on time and hard workers. I do recommend this company.', author: 'C. L.', date: '04/26/2022' },
  { text: 'They did an incredible job on my kitchen remodel last year. Steve, Mel and Deb are so easy to work with and they made sure the job got done correctly and quickly. Looking forward to working with them on future projects. Mahalo to the Dumore team!!', author: 'J. B.', date: '5/22/2015' },
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
                <div className={styles.stars}>★★★★★</div>
                <p>&quot;{review.text}&quot;</p>
                <span>- {review.author}, {review.date}</span>
            </div>
            ))}
        </div>
    </section>
  );
};

export default Reviews;
