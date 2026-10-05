
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  {
    "question": "What should I do immediately after a storm damages my home?",
    "answer": "First, ensure your family is safe. Then, if possible, take photos of the damage for your insurance claim and call a professional for emergency board-up and tarping services."
  },
  {
    "question": "Will my homeowner's insurance cover storm damage?",
    "answer": "In most cases, yes. However, coverage can vary depending on your policy and the type of storm. It's important to review your policy and contact your insurance agent as soon as possible."
  }
];

const StormDamageRepairPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Storm Damage Repair in Hawaii</h1>
        <p className={styles.servicePageDescription}>Restoring Your Home After the Storm</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>When the Unthinkable Happens, We&apos;re Here to Help</h2>
          <p>
            Hawaii&apos;s beautiful weather can sometimes turn severe, with tropical storms and hurricanes causing significant damage to homes. When your home is damaged by a storm, it can be a stressful and overwhelming experience. At Dumore Construction and Remodeling, we provide fast, reliable storm damage repair services to help you get your life back to normal as quickly as possible.
          </p>
        </section>

        <section>
          <h2>Our Storm Damage Repair Services</h2>
          <h3>Emergency Board-Up and Tarping</h3>
          <p>
            After a storm, the first priority is to secure your home and prevent further damage. We provide emergency board-up and tarping services to protect your home from the elements.
          </p>
          <h3>Water Damage Restoration</h3>
          <p>
            Water intrusion is a common problem after a storm. We provide comprehensive water damage restoration services, including water extraction, drying, and dehumidification, to prevent mold and mildew growth.
          </p>
          <h3>Structural Repairs</h3>
          <p>
            High winds and falling debris can cause significant structural damage to your home. Our team of experienced professionals can handle all types of structural repairs, from roof and siding replacement to framing and foundation repair.
          </p>
        </section>

        <section>
          <h2>Navigating the Insurance Claims Process</h2>
          <p>
            Dealing with insurance companies can be a complex and confusing process. We can work with your insurance company to ensure that your claim is handled properly and that you receive the compensation you deserve.
          </p>
        </section>

        <section>
          <h2>Your Trusted Partner in Storm Recovery</h2>
          <p>
            When your home is damaged by a storm, you need a contractor you can trust. With our years of experience in storm damage repair in Hawaii, you can count on us to restore your home to its pre-storm condition quickly and efficiently. Contact us today for a free consultation.
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

export default StormDamageRepairPage;
