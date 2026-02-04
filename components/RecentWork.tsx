import Carousel from './Carousel';
import styles from './RecentWork.module.css';

const RecentWork = () => {
  const projects = [
    {
      src: "/kitcchen-remodel-honolulu-general-contractor.webp",
      alt: "Kitchen remodel in Honolulu by a general contractor.",
      title: "Kitchen Remodel",
    },
    {
      src: "/living-room-remodel-honolulu-general-contractor.webp",
      alt: "Living room remodel in Honolulu by a general contractor.",
      title: "Living Room Remodel",
    },
    {
      src: "/home-remodel-honolulu-general-contractor.webp",
      alt: "A home remodel in Honolulu by a general contractor.",
      title: "Home Remodel",
    },
    {
        src: "/design-new-build-honolulu-general-contractor.webp",
        alt: "A new build in Honolulu by a general contractor.",
        title: "New Build",
    },
    {
        src: "/modular-home-honolulu-general-contractor.webp",
        alt: "A modular home in Honolulu by a general contractor.",
        title: "Modular Home",
    },
  ];

  return (
    <section className={styles.recentWorkSection}>
      <h2 className={styles.title}>Our Recent Work</h2>
      <Carousel items={projects} />
    </section>
  );
};

export default RecentWork;
