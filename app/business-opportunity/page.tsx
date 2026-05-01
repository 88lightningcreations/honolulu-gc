
import React from 'react';
import styles from './BusinessOpportunity.module.css';

const BusinessOpportunityPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>For Sale: Premier Turnkey General Contracting Business in Hawaii</h1>
        <p>A unique opportunity to acquire a well-established, full-service general contracting company.</p>
      </header>

      <section className={styles.section}>
        <h2>Key Investment Highlights & Selling Points</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Comprehensive, Statewide Operational License:</strong> Unmatched reach across all Hawaiian islands with a vertically integrated model including flooring/tile store, merchandise sales, and installation.
          </li>
          <li className={styles.listItem}>
            <strong>Diverse & Resilient Service Offerings:</strong> A broad portfolio including new construction, specialty remodeling, and high-margin niche services like house moving and storm damage repair.
          </li>
          <li className={styles.listItem}>
            <strong>Turnkey Operation & Seamless Transition:</strong> Owner willing to remain as RME and as a full-time employee for up to 5 years, ensuring continuity.
          </li>
          <li className={styles.listItem}>
            <strong>Attractive & Flexible Acquisition Terms:</strong> Seeking a skilled operator with a cash discount available for a full buyout.
          </li>
          <li className={styles.listItem}>
            <strong>Established Brand & Digital Presence:</strong> Professional website and a domain secured for the next 10 years.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Information for Due Diligence</h2>
        <p>A complete prospectus with financial, operational, and market data is available for qualified buyers. Please inquire for details.</p>
        {/* This is where we will add the more detailed information later */}
      </section>

      <section className={`${styles.section} ${styles.contactSection}`}>
        <h3>Serious Inquiries Only</h3>
        <p>For more information and to receive the full prospectus, please contact us.</p>
        <p>
            To discuss further details please email <a href="mailto:lequires001@gmail.com">lequires001@gmail.com</a> or call us at <a href="tel:+18082169956">+1 (808) 216-9956</a>.
          </p>
      </section>
    </div>
  );
};

export default BusinessOpportunityPage;
