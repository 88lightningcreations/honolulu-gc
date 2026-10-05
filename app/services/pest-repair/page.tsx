
import React from 'react';
import styles from '../page.module.css';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import JsonLdFaq from '@/components/JsonLdFaq';

const faqs = [
  { question: "What are the most common signs of termite damage?", answer: "Some common signs include mud tubes on exterior walls, hollow-sounding wood, and swarms of termites." },
  { question: "Does homeowner's insurance cover pest damage?", answer: "Typically, homeowner's insurance does not cover pest damage, as it is considered a preventable issue." }
];

const PestRepairPage = () => {
  return (
    <div className={styles.servicePageContainer}>
      <JsonLdFaq faqs={faqs} />
      <header>
        <h1 className={styles.servicePageTitle}>Pest Damage Repair in Hawaii</h1>
        <p className={styles.servicePageDescription}>Protecting Your Home from Unwanted Intruders</p>
      </header>

      <article className={styles.servicePageContent}>
        <section>
          <h2>The Hidden Threat of Pests in Paradise</h2>
          <p>
            Hawaii&apos;s tropical climate, while a paradise for us, is also a breeding ground for a wide variety of pests. From termites and rodents to roaches and ants, these unwelcome guests can cause significant damage to your home, often unseen until it&apos;s too late. At Dumore Construction and Remodeling, we specialize in repairing the damage caused by these pests, restoring the safety and integrity of your home.
          </p>
        </section>

        <section>
          <h2>Common Types of Pest Damage We Repair</h2>
          <h3>Termite Damage</h3>
          <p>
            Termites are the most destructive pests in Hawaii, causing millions of dollars in damage each year. They feed on wood, compromising the structural integrity of your home. We repair termite damage to walls, floors, and roofs, ensuring your home is structurally sound.
          </p>
          <h3>Rodent Damage</h3>
          <p>
            Rats and mice can chew through electrical wires, insulation, and even pipes, creating fire hazards and causing water damage. We repair the damage caused by rodents and seal up entry points to prevent future infestations.
          </p>
          <h3>Other Pest Damage</h3>
          <p>
            We also repair damage caused by other common pests in Hawaii, including carpenter bees, powderpost beetles, and various species of ants and roaches. No matter the pest, we have the expertise to repair the damage and protect your home.
          </p>
        </section>

        <section>
          <h2>Our Pest Damage Repair Process</h2>
          <p>
            Our process begins with a thorough inspection to assess the extent of the damage. We then develop a comprehensive repair plan, which may include structural repairs, replacing damaged materials, and implementing preventative measures. We work closely with trusted pest control partners to ensure the infestation is completely eradicated before repairs begin.
          </p>
        </section>

        <section>
          <h2>Why Choose Dumore Construction and Remodeling?</h2>
          <p>
            With our extensive experience in construction and remodeling in Hawaii, we understand the unique challenges of pest-related damage. We are committed to providing high-quality repairs that not only fix the damage but also help to prevent future problems. Your peace of mind is our top priority.
          </p>
        </section>
      </article>

      <div className={styles.faqContainer}>
        <InteractiveFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default PestRepairPage;
