
import React from 'react';
import styles from '../ServicePage.module.css';

const HomeRemodelingPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Home Remodeling in Hawaii</h1>
        <p>Transforming Your Space to Fit Your Lifestyle</p>
      </header>

      <article className={styles.article}>
        <section>
          <h2>Reimagine Your Home</h2>
          <p>
            Your home should be a reflection of your personality and a sanctuary that meets your needs. If your current space is no longer working for you, a home remodel can be a transformative experience. At Dumore Construction and Remodeling, we specialize in helping homeowners in Hawaii fall in love with their homes all over again.
          </p>
        </section>

        <section>
          <h2>Our Home Remodeling Services</h2>
          <h3>Whole-Home Renovations</h3>
          <p>
            Whether you&apos;re looking to update an older home or completely reconfigure your layout, we can handle whole-home renovations of any scale. We work with you to create a cohesive design that flows seamlessly from room to room.
          </p>
          <h3>Room-Specific Remodels</h3>
          <p>
            From updating a single room to remodeling multiple areas of your home, we can help you create the space you&apos;ve always dreamed of. We have extensive experience in kitchen and bathroom remodeling, basement finishing, and more.
          </p>
          <h3>Exterior Renovations</h3>
          <p>
            Enhance your home&apos;s curb appeal and protect it from the elements with our exterior renovation services. We offer everything from siding and window replacement to new roof installation and lanai enclosures.
          </p>
        </section>

        <section>
          <h2>A Collaborative Approach to Remodeling</h2>
          <p>
            We believe that a successful remodel is a collaborative effort. We work closely with you throughout the entire process, from the initial design concepts to the final finishing touches. Your satisfaction is our top priority, and we are committed to delivering a finished product that you will love.
          </p>
        </section>

        <section>
          <h2>Experience the Dumore Difference</h2>
          <p>
            With our commitment to quality, craftsmanship, and customer satisfaction, we have earned a reputation as one of Hawaii&apos;s premier remodeling contractors. Contact us today to learn how we can help you transform your house into the home of your dreams.
          </p>
        </section>
      </article>
    </div>
  );
};

export default HomeRemodelingPage;
