
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  { question: "What is the first step in planning a home addition?", answer: "The first step is to consult with an architect or a design-build firm to discuss your needs and budget." },
  { question: "How much does a home addition cost per square foot?", answer: "The cost can vary greatly depending on the complexity of the project, but a general range is $200-$500 per square foot." }
];

const HomeAdditionsPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Home Additions in Hawaii</h1>
        <p className={styles.servicePageDescription}>Expand Your Home to Fit Your Growing Needs</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>More Room to Live, Grow, and Thrive</h2>
          <p>
            As your family grows and your needs change, you may find that you&apos;ve outgrown your current home. A home addition is a great way to add the extra space you need without the hassle and expense of moving. At Dumore Construction and Remodeling, we specialize in designing and building seamless home additions that blend perfectly with your existing home.
          </p>
        </section>

        <section>
          <h2>Our Home Addition Services</h2>
          <h3>Second-Story Additions</h3>
          <p>
            If you&apos;re looking to add a significant amount of space to your home, a second-story addition may be the perfect solution. We can add a new level to your home, providing you with extra bedrooms, bathrooms, or even a new master suite.
          </p>
          <h3>Room Additions</h3>
          <p>
            Whether you need a new bedroom, a home office, or a larger living area, we can design and build a room addition that meets your specific needs. We work closely with you to ensure that your new space is both functional and beautiful.
          </p>
          <h3>Lanai and Outdoor Living Spaces</h3>
          <p>
            In Hawaii, outdoor living is a way of life. We can help you create a beautiful and functional outdoor living space, from a simple lanai to a fully equipped outdoor kitchen. Let us help you make the most of our beautiful island weather.
          </p>
        </section>

        <section>
          <h2>A Seamless Integration with Your Existing Home</h2>
          <p>
            Our goal is to create a home addition that looks and feels like it was always part of your home. We pay close attention to the architectural style of your home, ensuring that your new addition blends seamlessly with your existing structure.
          </p>
        </section>

        <section>
          <h2>Expand Your Horizons</h2>
          <p>
            If you&apos;re ready to expand your home and your horizons, contact us today. Our team of experienced professionals is ready to help you create the extra space you need to live, grow, and thrive.
          </p>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default HomeAdditionsPage;
