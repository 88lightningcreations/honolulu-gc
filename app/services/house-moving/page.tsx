
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  {
    "question": "Is it possible to live in the house while it's being moved?",
    "answer": "For safety reasons, it is not possible to occupy the house during the move. You will need to arrange for temporary accommodation."
  },
  {
    "question": "How much does it cost to move a house in Hawaii?",
    "answer": "The cost of moving a house is highly variable and depends on the size and weight of the house, the distance of the move, and the complexity of the route. A starting estimate would be in the tens of thousands of dollars."
  }
];

const HouseMovingPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>House Moving Services in Hawaii</h1>
        <p className={styles.servicePageDescription}>Relocating Your Home with Precision and Care</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>A Unique Solution for a Unique Situation</h2>
          <p>
            House moving, while not a common service, is a complex and delicate process that requires specialized expertise. Whether you&apos;re looking to move your home to a new location on your property or to a different island entirely, Dumore Construction and Remodeling has the experience and equipment to handle the job safely and efficiently.
          </p>
        </section>

        <section>
          <h2>Our House Moving Services</h2>
          <h3>Structural Lifting and Support</h3>
          <p>
            The first step in any house move is to carefully lift the structure from its foundation. Our team uses state-of-the-art hydraulic jacking systems to lift your home with the utmost care and precision. We then install a network of steel beams and supports to ensure the structural integrity of your home during the move.
          </p>
          <h3>Transportation</h3>
          <p>
            Once your home is secured, we use specialized transporters to move it to its new location. Our experienced drivers are experts in navigating the unique challenges of Hawaii&apos;s roads and terrain, ensuring a safe and smooth journey for your home.
          </p>
          <h3>New Foundation and Re-integration</h3>
          <p>
            At the new site, we construct a new foundation that is engineered to meet or exceed all local building codes. We then carefully lower your home onto its new foundation and re-connect all utilities, ensuring a seamless transition.
          </p>
        </section>

        <section>
          <h2>Why Trust Us with Your Home Move?</h2>
          <p>
            Moving a house is a significant undertaking that requires a high level of expertise and experience. At Dumore Construction and Remodeling, we have a proven track record of successful house moves in Hawaii. We are fully licensed and insured, and our team of professionals is committed to providing the highest level of service and care.
          </p>
        </section>

        <section>
          <h2>Contact Us for a Consultation</h2>
          <p>
            If you are considering moving your home, contact us today for a consultation. We will be happy to discuss your project with you and provide you with a detailed estimate.
          </p>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default HouseMovingPage;
