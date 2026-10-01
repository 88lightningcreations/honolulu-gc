
import React from 'react';
import styles from '../ServicePage.module.css';

const AdditionsPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Home Additions in Hawaii</h1>
        <p>Expand Your Home to Fit Your Growing Needs</p>
      </header>

      <article className={styles.article}>
        <section>
          <h2>More Room to Live, Grow, and Thrive</h2>
          <p>
            As your family grows and your needs change, you may find that you've outgrown your current home. A home addition is a great way to add the extra space you need without the hassle and expense of moving. At Dumore Construction and Remodeling, we specialize in designing and building seamless home additions that blend perfectly with your existing home.
          </p>
        </section>

        <section>
          <h2>Our Home Addition Services</h2>
          <h3>Second-Story Additions</h3>
          <p>
            If you're looking to add a significant amount of space to your home, a second-story addition may be the perfect solution. We can add a new level to your home, providing you with extra bedrooms, bathrooms, or even a new master suite.
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
            If you're ready to expand your home and your horizons, contact us today. Our team of experienced professionals is ready to help you create the extra space you need to live, grow, and thrive.
          </p>
        </section>
      </article>
    </div>
  );
};

export default AdditionsPage;
