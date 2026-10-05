'use client';
import React, { useState } from 'react';
import styles from './InteractiveFAQ.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface InteractiveFAQProps {
  faqs: FAQ[];
}

const InteractiveFAQ: React.FC<InteractiveFAQProps> = ({ faqs }) => {
    const [visibleCount, setVisibleCount] = useState(5);

    const handleReadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    return (
        <section className={styles.faqWrapper}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
                {faqs.slice(0, visibleCount).map((faq, index) => (
                    <details key={index} className={styles.faqItem}>
                        <summary className={styles.question}>
                            {faq.question}
                            <span className={styles.arrow}></span>
                        </summary>
                        <div className={styles.answer}>
                            <p>{faq.answer}</p>
                        </div>
                    </details>
                ))}
                {visibleCount < faqs.length && (
                    <button onClick={handleReadMore} className={styles.readMoreButton}>
                        Read More FAQ&apos;s
                    </button>
                )}
            </div>
        </section>
    );
};

export default InteractiveFAQ;
