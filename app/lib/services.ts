
export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    slug: 'termite-damage-repair',
    title: 'Termite Damage Repair',
    description: 'Comprehensive termite damage repair services to restore the integrity of your home.',
    image: '/images/termite-damage-repair.jpg',
    faqs: [
      { question: "What are the signs of termite damage?", answer: "Signs of termite damage include hollow-sounding wood, discarded wings, mud tubes, and bubbling or peeling paint." },
      { question: "How long does termite damage repair take?", answer: "The duration of the repair depends on the extent of the damage. Minor repairs can take a few days, while extensive repairs can take several weeks." }
    ]
  },
  {
    slug: 'new-construction',
    title: 'New Construction',
    description: 'Building your dream home from the ground up with our expert new construction services.',
    image: '/images/new-construction.jpg',
    faqs: [
      { question: "What is the first step in new construction?", answer: "The first step is to have a detailed plan and get the necessary permits from the local authorities." },
      { question: "Can you help with the design process?", answer: "Yes, we work with a team of architects and designers who can help you create the perfect design for your new home." }
    ]
  },
  {
    slug: 'home-remodeling',
    title: 'Home Remodeling',
    description: "Transform your house into the home you've always wanted with our remodeling services.",
    image: '/images/home-remodeling.jpg',
    faqs: [
      { question: "How much does a home remodel cost?", answer: "The cost of a home remodel varies greatly depending on the scope of the project. We can provide a detailed estimate after an initial consultation." },
      { question: "Do I need to move out during the remodel?", answer: "It depends on the extent of the remodel. For smaller projects, you may be able to stay in your home, but for larger projects, it may be necessary to move out temporarily." }
    ]
  },
  {
    slug: 'kitchen-remodeling',
    title: 'Kitchen Remodeling',
    description: 'Modernize your kitchen with our expert remodeling services.',
    image: '/images/kitchen-remodeling.jpg',
    faqs: [
      { question: "What are the latest trends in kitchen remodeling?", answer: "Some of the latest trends include smart appliances, open shelving, and large kitchen islands." },
      { question: "How long does a kitchen remodel take?", answer: "A kitchen remodel typically takes 4-8 weeks, depending on the complexity of the project." }
    ]
  },
  {
    slug: 'bathroom-remodeling',
    title: 'Bathroom Remodeling',
    description: 'Create a spa-like oasis in your own home with our bathroom remodeling services.',
    image: '/images/bathroom-remodeling.jpg',
    faqs: [
      { question: "What should I consider when remodeling my bathroom?", answer: "You should consider the layout, fixtures, lighting, and ventilation." },
      { question: "Can you make my bathroom more accessible?", answer: "Yes, we can install grab bars, a walk-in shower, and other features to make your bathroom more accessible." }
    ]
  },
  {
    slug: 'additions',
    title: 'Additions',
    description: 'Expand your living space with a seamless home addition.',
    image: '/images/additions.jpg',
    faqs: [
      { question: "What types of additions can you build?", answer: "We can build a variety of additions, including extra bedrooms, bathrooms, sunrooms, and garages." },
      { question: "Will the addition match the style of my home?", answer: "Yes, we will work with you to ensure that the addition matches the style of your home." }
    ]
  },
  {
    slug: 'pest-repair',
    title: 'Pest Repair',
    description: 'Effective pest repair solutions to protect your home from unwanted intruders.',
    image: '/images/pest-repair.jpg',
    faqs: [
      { question: "What types of pests do you handle?", answer: "We handle a wide range of pests, including termites, ants, roaches, and rodents." },
      { question: "Are your pest control methods safe for my family and pets?", answer: "Yes, we use safe and effective pest control methods that are safe for your family and pets." }
    ]
  },
  {
    slug: 'house-moving',
    title: 'House Moving',
    description: 'Relocate your entire house to a new location with our professional house moving services.',
    image: '/images/house-moving.jpg',
    faqs: [
      { question: "How much does it cost to move a house?", answer: "The cost of moving a house depends on the size of the house, the distance of the move, and the complexity of the project." },
      { question: "Is house moving safe?", answer: "Yes, house moving is a safe and reliable process when done by experienced professionals." }
    ]
  },
];
