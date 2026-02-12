
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    { name: 'New Construction', url: '/services/new-construction' },
    { name: 'Home Remodeling', url: '/services/home-remodeling' },
    { name: 'Kitchen Remodeling', url: '/services/kitchen-remodeling' },
    { name: 'Bathroom Remodeling', url: '/services/bathroom-remodeling' },
    { name: 'Additions', url: '/services/additions' },
    { name: 'Pest Repair', url: '/services/pest-repair' },
    { name: 'Storm Damage Repair', url: '/services/storm-damage-repair' },
    { name: 'House Moving', url: '/services/house-moving' },
  ];
  
  const servicePages = services.map((service) => ({
    url: `https://dumoreconstruction.com${service.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://dumoreconstruction.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://dumoreconstruction.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...servicePages,
    {
      url: 'https://dumoreconstruction.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://dumoreconstruction.com/terms-of-service',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
