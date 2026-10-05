
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  { question: "How long does it take to build a new home in Hawaii?", answer: "The timeline for a new home build can vary from 9 to 18 months, depending on the complexity of the design and the permitting process." },
  { question: "What are the key factors that affect the cost of a new home build?", answer: "The primary factors are the size and complexity of the home, the quality of materials, and the location." }
];

const NewConstructionPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>New Construction in Hawaii</h1>
        <p className={styles.servicePageDescription}>Building Your Dream Home from the Ground Up</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>Your Vision, Our Expertise</h2>
          <p>
            Building a new home is a significant investment and an exciting journey. At Dumore Construction and Remodeling, we partner with you to bring your vision to life, creating a home that is not only beautiful and functional but also a true reflection of your lifestyle. We are committed to quality craftsmanship and transparent communication throughout the entire process.
          </p>
        </section>

        <section>
          <h2>Our New Construction Process</h2>
          <h3>Design and Planning</h3>
          <p>
            We begin with a detailed consultation to understand your needs, preferences, and budget. Our team works with you and your architect to create a design that is both innovative and practical, ensuring that every detail is considered.
          </p>
          <h3>Construction</h3>
          <p>
            Our experienced team of builders and craftsmen then get to work, using high-quality materials and proven construction techniques to build your home to the highest standards. We manage every aspect of the construction process, ensuring a smooth and efficient build.
          </p>
          <h3>Finishing Touches</h3>
          <p>
            The final phase is where your house truly becomes a home. We work with you to select the perfect finishes, from flooring and paint colors to fixtures and landscaping, ensuring a result that you will love for years to come.
          </p>
        </section>

        <section>
          <h2>Why Choose Us for Your New Construction Project?</h2>
          <p>
            With our deep understanding of the unique challenges and opportunities of building in Hawaii, we are the ideal partner for your new construction project. We are dedicated to providing a seamless and enjoyable experience, delivering a home that exceeds your expectations in every way.
          </p>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default NewConstructionPage;
