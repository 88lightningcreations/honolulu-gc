
import React from 'react';
import styles from '../ServicePage.module.css';

const NewConstructionPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>New Construction in Hawaii</h1>
        <p>Building Your Dream Home from the Ground Up</p>
      </header>

      <article className={styles.article}>
        <section>
          <h2>Your Vision, Our Expertise</h2>
          <p>
            Building a new home is a significant investment and an exciting journey. At Dumore Construction and Remodeling, we partner with you to bring your vision to life, creating a home that is not only beautiful and functional but also a true reflection of your lifestyle. We are committed to quality craftsmanship and transparent communication throughout the entire process.
          </p>
        </section>

        <section>
          <h2>Our New Construction Process</h2>
          <h3>Design and Planning</h3>
          <p>
            We begin with a detailed consultation to understand your needs, preferences, and budget. Our team works with you and your architect to create a design that is both innovative and practical, ensuring that every detail is considered.
          </p>
          <h3>Construction</h3>
          <p>
            Our experienced team of builders and craftsmen then get to work, using high-quality materials and proven construction techniques to build your home to the highest standards. We manage every aspect of the construction process, ensuring a smooth and efficient build.
          </p>
          <h3>Finishing Touches</h3>
          <p>
            The final phase is where your house truly becomes a home. We work with you to select the perfect finishes, from flooring and paint colors to fixtures and landscaping, ensuring a result that you will love for years to come.
          </p>
        </section>

        <section>
          <h2>Why Choose Us for Your New Construction Project?</h2>
          <p>
            With our deep understanding of the unique challenges and opportunities of building in Hawaii, we are the ideal partner for your new construction project. We are dedicated to providing a seamless and enjoyable experience, delivering a home that exceeds your expectations in every way.
          </p>
        </section>
      </article>
    </div>
  );
};

export default NewConstructionPage;
