
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  { question: "What are the most popular features in a bathroom remodel?", answer: "The most popular features are large, walk-in showers, freestanding tubs, and double vanities." },
  { question: "How much does a bathroom remodel cost?", answer: "The cost of a bathroom remodel can vary widely, but a good starting estimate for a complete remodel is between $10,000 and $25,000." }
];

const BathroomRemodelingPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Bathroom Remodeling in Hawaii</h1>
        <p className={styles.servicePageDescription}>Your Personal Spa-Like Retreat</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>Transform Your Bathroom into an Oasis</h2>
          <p>
            Your bathroom should be more than just a functional space; it should be a sanctuary where you can relax and rejuvenate. At Dumore Construction and Remodeling, we specialize in creating beautiful, spa-like bathrooms that provide a luxurious escape from the stresses of everyday life.
          </p>
        </section>

        <section>
          <h2>Our Bathroom Remodeling Services</h2>
          <h3>Custom Showers and Tubs</h3>
          <p>
            From spacious walk-in showers with rainfall showerheads to elegant freestanding tubs, we can create a custom bathing experience that is tailored to your needs. We offer a wide range of tile, stone, and fixture options to create a look that is both beautiful and timeless.
          </p>
          <h3>Vanities and Storage Solutions</h3>
          <p>
            A well-designed vanity can provide both style and function to your bathroom. We offer a wide range of custom and semi-custom vanity options, as well as creative storage solutions to help you keep your bathroom organized and clutter-free.
          </p>
          <h3>Luxurious Finishes and Lighting</h3>
          <p>
            The right finishes and lighting can transform your bathroom from ordinary to extraordinary. We offer a wide range of high-quality flooring, tile, and fixture options, as well as a variety of lighting solutions to create a warm and inviting atmosphere.
          </p>
        </section>

        <section>
          <h2>A Stress-Free Remodeling Experience</h2>
          <p>
            We understand that a bathroom remodel can be a major undertaking. That&apos;s why we are committed to providing a stress-free experience from start to finish. Our team of experienced professionals will handle every aspect of the project, from the initial design to the final installation, ensuring a smooth and efficient process.
          </p>
        </section>

        <section>
          <h2>Your Dream Bathroom Awaits</h2>
          <p>
            If you&apos;re ready to transform your bathroom into the spa-like retreat you&apos;ve always dreamed of, contact us today. Our team is ready to help you create a space that you will love for years to come.
          </p>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default BathroomRemodelingPage;
