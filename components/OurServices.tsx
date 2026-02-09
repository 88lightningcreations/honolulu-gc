
import Link from 'next/link';
import styles from './OurServices.module.css';
import { FaHardHat, FaHome, FaUtensils, FaBath, FaPlus, FaBroom, FaHammer, FaTree } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: FaHardHat,
    title: 'New Construction',
    description: 'Building your dream home from the ground up, with a focus on quality and craftsmanship.',
    link: '/services/new-construction'
  },
  {
    icon: FaHome,
    title: 'Home Remodeling',
    description: 'Transforming your existing space to better suit your needs and lifestyle.',
    link: '/services/home-remodeling'
  },
  {
    icon: FaUtensils,
    title: 'Kitchen Remodeling',
    description: 'Creating a beautiful and functional kitchen that is the heart of your home.',
    link: '/services/kitchen-remodeling'
  },
  {
    icon: FaBath,
    title: 'Bathroom Remodeling',
    description: 'Transforming your bathroom into a spa-like retreat for relaxation and rejuvenation.',
    link: '/services/bathroom-remodeling'
  },
  {
    icon: FaPlus,
    title: 'Additions',
    description: 'Expanding your home to create more space for your growing family or changing needs.',
    link: '/services/additions'
  },
  {
    icon: FaBroom,
    title: 'Pest Repair',
    description: 'Comprehensive pest damage repair services to restore the integrity of your home.',
    link: '/services/pest-repair'
  },
  {
    icon: FaHammer,
    title: 'Storm Damage Repair',
    description: 'Reliable and efficient storm damage repair to get your home back to its pre-storm condition.',
    link: '/services/storm-damage-repair'
  },
  {
    icon: FaTree,
    title: 'House Moving',
    description: 'Professional house moving services, ensuring a safe and smooth relocation of your home.',
    link: '/services/house-moving'
  },
];

const OurServices = () => {
  return (
    <section className={styles.ourServices}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <Link href={service.link} key={service.title} className={styles.serviceCard}>

            <div className={styles.serviceIcon}>
              <service.icon />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
