'use client';
import React, { useState } from 'react';
import styles from './InteractiveFAQ.module.css';

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of general contracting services, including new construction, kitchen and bathroom remodeling, home additions, and storm damage repair."
    },
    {
        question: "What is your service area?",
        answer: "We proudly serve the entire island of Oahu, including Honolulu, Kailua, Kaneohe, and the surrounding areas."
    },
    {
        question: "How do I get a quote?",
        answer: "You can get a free, no-obligation quote by filling out the contact form on our website or by calling us at +1 (808) 216-9956."
    },
    {
        question: "Are you licensed and insured?",
        answer: "Yes, we are a fully licensed and insured general contractor in the state of Hawaii. Our license number is #BC-12345."
    },
    {
        question: "Do you offer financing?",
        answer: "While we do not offer direct financing, we can recommend reputable local lenders who can help you secure the best financing options for your project."
    },
];

const InteractiveFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.faqWrapper}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.question} onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className={`${styles.arrow} ${activeIndex === index ? styles.open : ''}`}></span>
                        </div>
                        <div className={`${styles.answer} ${activeIndex === index ? styles.open : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InteractiveFAQ;
