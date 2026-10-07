
export interface Service {
  slug: string;
  title: string;
  description: string;
  
}

export const services: Service[] = [

  {
    slug: 'new-construction',
    title: 'New Construction',
    description: 'Building your dream home from the ground up with our expert new construction services.',
  },
  {
    slug: 'home-remodeling',
    title: 'Home Remodeling',
    description: "Transform your house into the home you've always wanted with our remodeling services.",
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    description: 'Modernize your kitchen with our expert remodeling services.',
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    description: 'Create a spa-like oasis in your own home with our bathroom remodeling services.',
  },
  {
    slug: 'home-additions',
    title: 'Additions',
    description: 'Expand your living space with a seamless home addition.',
  },
  {
    slug: 'pest-repair',
    title: 'Pest Repair',
    description: 'Effective pest repair solutions to protect your home from unwanted intruders.',
  },
  {
    slug: 'house-moving',
    title: 'House Moving',
    description: 'Relocate your entire house to a new location with our professional house moving services.',
  },
  {
      slug: 'storm-damage-repair',
      title: 'Storm Damage Repair',
      description: 'We provide comprehensive storm damage repair services to restore your home to its pre-storm condition.',
  }
];
