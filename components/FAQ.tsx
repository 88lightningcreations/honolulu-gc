'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'What is the typical timeline for a construction project?',
    answer: 'The timeline varies depending on the scope and complexity of the project. We provide a detailed schedule before we begin any work.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide free, no-obligation estimates for all potential projects.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and insured for your protection and peace of mind.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the greater metropolitan area and surrounding suburbs.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button onClick={() => toggleFAQ(index)} className={styles.question}>
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && <div className={styles.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
