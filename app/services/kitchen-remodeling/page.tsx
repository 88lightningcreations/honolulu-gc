
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  { question: "What are the latest trends in kitchen remodeling?", answer: "Some of the latest trends include smart appliances, open shelving, and large kitchen islands." },
  { question: "How long does a kitchen remodel take?", answer: "A kitchen remodel typically takes 4-8 weeks, depending on the complexity of the project." }
];

const KitchenRemodelingPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Kitchen Remodeling in Hawaii</h1>
        <p className={styles.servicePageDescription}>The Kitchen of Your Dreams is Within Reach</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>The Heart of Your Home, Reimagined</h2>
          <p>
            The kitchen is more than just a place to cook; it&apos;s the heart of your home, a gathering place for family and friends. A well-designed kitchen can enhance your lifestyle and add significant value to your home. At Dumore Construction and Remodeling, we specialize in creating beautiful, functional kitchens that are tailored to your specific needs and style.
          </p>
        </section>

        <section>
          <h2>Our Kitchen Remodeling Services</h2>
          <h3>Custom Cabinetry and Countertops</h3>
          <p>
            From custom-built cabinets to luxurious granite and quartz countertops, we offer a wide range of options to create a kitchen that is both beautiful and durable. Our skilled craftsmen will work with you to design and build a kitchen that is uniquely yours.
          </p>
          <h3>Modern Appliance Integration</h3>
          <p>
            We can help you select and install the latest in kitchen appliance technology, from energy-efficient refrigerators to smart ovens and cooktops. We ensure that your new appliances are seamlessly integrated into your kitchen design.
          </p>
          <h3>Functional Layouts and Lighting</h3>
          <p>
            A well-designed kitchen is not just about aesthetics; it&apos;s also about functionality. We work with you to create a layout that maximizes your space and improves your workflow. We also design and install a variety of lighting options to create a bright and inviting atmosphere.
          </p>
        </section>

        <section>
          <h2>A Seamless Remodeling Experience</h2>
          <p>
            We understand that a kitchen remodel can be disruptive. That&apos;s why we are committed to providing a seamless and stress-free experience. We manage every aspect of the project, from the initial design to the final installation, and we work efficiently to minimize the disruption to your daily life.
          </p>
        </section>

        <section>
          <h2>Your Dream Kitchen Awaits</h2>
          <p>
            If you&apos;re ready to transform your kitchen into the space you&apos;ve always dreamed of, contact us today. Our team of experienced designers and craftsmen are ready to help you create a kitchen that you will love for years to come.
          </p>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default KitchenRemodelingPage;
