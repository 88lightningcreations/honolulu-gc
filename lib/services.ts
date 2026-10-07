
import { FaHardHat, FaHome, FaUtensils, FaBath, FaPlus, FaBroom, FaHammer, FaTree } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { PATHS } from './paths';

export interface Service {
  icon: IconType;
  title: string;
  description: string;
  link: string;
}

export const services: Service[] = [
  {
    icon: FaHardHat,
    title: 'New Construction',
    description: 'Building your dream home from the ground up, with a focus on quality and craftsmanship.',
    link: PATHS.services.newConstruction
  },
  {
    icon: FaHome,
    title: 'Home Remodeling',
    description: 'Transforming your existing space to better suit your needs and lifestyle.',
    link: PATHS.services.homeRemodeling
  },
  {
    icon: FaUtensils,
    title: 'Kitchen Remodeling',
    description: 'Creating a beautiful and functional kitchen that is the heart of your home.',
    link: PATHS.services.kitchenRemodeling
  },
  {
    icon: FaBath,
    title: 'Bathroom Remodeling',
    description: 'Transforming your bathroom into a spa-like retreat for relaxation and rejuvenation.',
    link: PATHS.services.bathroomRemodeling
  },
  {
    icon: FaPlus,
    title: 'Additions',
    description: 'Expanding your home to create more space for your growing family or changing needs.',
    link: PATHS.services.homeAdditions
  },
  {
    icon: FaBroom,
    title: 'Pest Repair',
    description: 'Comprehensive pest damage repair to restore the integrity of your home.',
    link: PATHS.services.pestRepair
  },
  {
    icon: FaHammer,
    title: 'Storm Damage Repair',
    description: 'Reliable and efficient storm damage repair to get your home back to its pre-storm condition.',
    link: PATHS.services.stormDamageRepair
  },
  {
    icon: FaTree,
    title: 'House Moving',
    description: 'Professional house moving services, ensuring a safe and smooth relocation of your home.',
    link: PATHS.services.houseMoving
  },
];
