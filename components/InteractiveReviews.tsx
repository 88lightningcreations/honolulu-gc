'use client';
import React from 'react';
import styles from './InteractiveReviews.module.css';

const reviews = [
    {
        quote: "Their attention to detail was impeccable. Our kitchen remodel exceeded all our expectations. Truly a dream come true!",
        author: 'Sarah L., Honolulu'
    },
    {
        quote: "From the initial design to the final nail, the process was seamless. Professional, punctual, and profoundly skilled.",
        author: 'David M., Kailua'
    },
    {
        quote: "We were nervous about building a new home, but their team made it an incredible journey. The quality of their work speaks for itself.",
        author: 'Keiko T., Manoa'
    },
    {
        quote: "Our storm-damaged roof was repaired faster than we thought possible. They handled everything with the insurance company. A+ service!",
        author: 'Mike R., Kaneohe'
    },
    {
        quote: "The addition to our home feels like it was always there. It blends perfectly, and the extra space has changed our lives.",
        author: 'The Chen Family, Ewa Beach'
    },
];

const InteractiveReviews = () => {
    return (
        <div className={styles.reviewsContainer}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <div className={styles.scrollingWrapper}>
                <div className={styles.scrollingContent}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <p>&quot;{review.quote}&quot;</p>
                            <p className={styles.author}>- {review.author}</p>
                        </div>
                    ))}
                    {reviews.map((review, index) => (
                        <div key={index + reviews.length} className={styles.reviewCard}>
                            <p>&quot;{review.quote}&quot;</p>
                            <p className={styles.author}>- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveReviews;
