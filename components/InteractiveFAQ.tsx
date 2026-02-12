'use client';
import React, { useState } from 'react';
import styles from './InteractiveFAQ.module.css';

const faqs = [
    {
        question: "Bathroom remodel ideas?",
        answer: `Here are three bathroom remodel ideas tailored for different budgets in Hawaii, based on the most in-demand features. Economic Value: Convert your tub into a walk-in shower for a more open and accessible layout, a popular choice in many condos. To save on costs, install a new, water-efficient toilet and use high-quality ceramic tiles that mimic the look of more expensive materials. Middle-Tier: Create a spa-like retreat with natural materials like river rock tiles for your shower floor, which will give your bathroom a tropical feel. Add a semi-frameless glass shower door and a new vanity with a durable quartz countertop. High-End: For a luxurious remodel, consider a "wet room" concept, which creates a seamless, open-concept bathing area that’s perfect for the Hawaiian climate. Include a freestanding soaking tub with an ocean view if possible, a wall-mounted toilet for a sleek, modern look, and high-end finishes like marble or porcelain tile. You can also add a digital shower system for a personalized spa experience.`
    },
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
    }
];

const InteractiveFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(5);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleReadMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.faqWrapper}>
                {faqs.slice(0, visibleCount).map((faq, index) => (
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
            {visibleCount < faqs.length && (
                <button onClick={handleReadMore} className={styles.readMoreButton}>
                    Read More FAQ&apos;s
                </button>
            )}
        </div>
    );
};

export default InteractiveFAQ;
