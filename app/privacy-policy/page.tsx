
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2 className={styles.heading}>1. Introduction</h2>
      <p>
        Welcome to Dumore Construction and Remodeling. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2 className={styles.heading}>2. Information We Collect</h2>
      <p>
        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </p>
      <ul>
        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
      </ul>

        <h2 className={styles.heading}>3. Use of Your Information</h2>
        <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
            <li>Create and manage your account.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.
            </li>
            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
        </ul>

        <h2 className={styles.heading}>4. Disclosure of Your Information</h2>
        <p>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>

        <h2 className={styles.heading}>5. Tracking Technologies</h2>
        <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
        </p>

        <h2 className={styles.heading}>6. Third-Party Websites</h2>
        <p>
            The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
        </p>

        <h2 className={styles.heading}>7. Security of Your Information</h2>
        <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className={styles.heading}>8. Policy for Children</h2>
        <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
        </p>

        <h2 className={styles.heading}>9. Contact Us</h2>
        <p>
            If you have questions or comments about this Privacy Policy, please contact us at:<br/>
            Dumore Construction and Remodeling<br/>
            1253 S Beretania St. #1501, Honolulu, HI 96814, United States<br/>
            Phone: +18082169956
        </p>
    </div>
  );
};

export default PrivacyPolicy;
