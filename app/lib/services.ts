
export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'termite-damage-repair',
    title: 'Termite Damage Repair',
    description: 'Comprehensive termite damage repair services to restore the integrity of your home.',
    image: '/images/termite-damage-repair.jpg',
  },
  {
    slug: 'new-construction',
    title: 'New Construction',
    description: 'Building your dream home from the ground up with our expert new construction services.',
    image: '/images/new-construction.jpg',
  },
  {
    slug: 'home-remodeling',
    title: 'Home Remodeling',
    description: "Transform your house into the home you\'ve always wanted with our remodeling services.",
    image: '/images/home-remodeling.jpg',
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    description: 'Modernize your kitchen with our expert remodeling services.',
    image: '/images/kitchen-remodeling.jpg',
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    description: 'Create a spa-like oasis in your own home with our bathroom remodeling services.',
    image: '/images/bathroom-remodeling.jpg',
  },
  {
    slug: 'additions',
    title: 'Additions',
    description: 'Expand your living space with a seamless home addition.',
    image: '/images/additions.jpg',
  },
  {
    slug: 'pest-repair',
    title: 'Pest Repair',
    description: 'Effective pest repair solutions to protect your home from unwanted intruders.',
    image: '/images/pest-repair.jpg',
  },
  {
    slug: 'house-moving',
    title: 'House Moving',
    description: 'Relocate your entire house to a new location with our professional house moving services.',
    image: '/images/house-moving.jpg',
  },
];
