
import styles from './TermsOfService.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2 className={styles.heading}>1. Agreement to Terms</h2>
      <p>
        By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
      </p>

      <h2 className={styles.heading}>2. Intellectual Property Rights</h2>
      <p>
        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.
      </p>

        <h2 className={styles.heading}>3. User Representations</h2>
        <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
        </p>

        <h2 className={styles.heading}>4. Prohibited Activities</h2>
        <p>
            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>

        <h2 className={styles.heading}>5. Term and Termination</h2>
        <p>
            These Terms of Service shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION.
        </p>

        <h2 className={styles.heading}>6. Governing Law</h2>
        <p>
            These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State of Hawaii applicable to agreements made and to be entirely performed within the State of Hawaii, without regard to its conflict of law principles.
        </p>

        <h2 className={styles.heading}>7. Contact Us</h2>
        <p>
            If you have questions or comments about this Terms of Service, please contact us at:<br/>
            Dumore Construction and Remodeling<br/>
            1253 S Beretania St. #1501, Honolulu, HI 96814, United States<br/>
            Phone: +18082169956
        </p>
    </div>
  );
};

export default TermsOfService;
