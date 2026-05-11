import styles from './NowHiring.module.css';

const NowHiringPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Now Hiring: Office Manager</h2>
        <p className={styles.jobDescription}>
          We are seeking a detail-oriented and experienced Office Manager to join our team. The ideal candidate will have a strong background in financial management within the construction industry and a passion for accuracy and efficiency. This role requires a high level of trust and responsibility, as the Office Manager will also be the designated trustee for handling sensitive company information and financial documents.
        </p>

        <div className={styles.details}>
          <div className={styles.responsibilities}>
            <h3>Responsibilities:</h3>
            <ul>
              <li>Manage profit and loss statements (P&L).</li>
              <li>Process payroll in a timely and accurate manner.</li>
              <li>Utilize QuickBooks for financial tracking and reporting.</li>
              <li>Manage accounts payable and receivable.</li>
              <li>Prepare financial reports for management.</li>
              <li>Act as the designated trustee for sensitive financial and company documents, ensuring their confidentiality and security.</li>
            </ul>
          </div>

          <div className={styles.qualifications}>
            <h3>Qualifications:</h3>
            <ul>
              <li>Minimum of 5 years of office experience in the construction industry.</li>
              <li>Proven experience with P&L, payroll, QuickBooks, and Microsoft Office Suite.</li>
              <li>Must be a resident of Oahu with the ability to commute to the Honolulu office when required.</li>
              <li>Strong organizational and communication skills.</li>
              <li>Demonstrated integrity and ability to handle confidential information with discretion.</li>
            </ul>
          </div>

          <div className={styles.benefits}>
            <h3>Benefits & Compensation:</h3>
            <ul>
              <li><strong>Hourly Rate:</strong> $20 - $25</li>
              <li>All necessary equipment will be supplied.</li>
              <li>Flexible work hours (20 - 25 hours per week).</li>
              <li>Opportunity to work from home after an initial in-office training period.</li>
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <p>
            <strong>Equal Opportunity Employer:</strong> We are an equal opportunity employer and value diversity. All employment is decided on the basis of qualifications, merit, and business need
          </p>
          <p>
            In accordance with Hawaiian law, we do not discriminate on the basis of race, color, religion, sex (including gender identity or expression), national origin, age, disability, marital status, sexual orientation, arrest and court record, or any other characteristic protected by law.
          </p>
        </div>

        <div className={styles.apply}>
          <h3>How to Apply:</h3>
          <p>
            To apply, please send your resume and a cover letter to <a href="mailto:lequires001@gmail.com">lequires001@gmail.com</a> or call us at <a href="tel:+18082169956">+1 (808) 216-9956</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NowHiringPage;