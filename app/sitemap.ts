import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/gallery',
    '/privacy-policy',
    '/services',
    '/terms-of-service',
    '/services/additions',
    '/services/bathroom-remodeling',
    '/services/home-remodeling',
    '/services/house-moving',
    '/services/kitchen-remodeling',
    '/services/new-construction',
    '/services/pest-repair',
    '/services/storm-damage-repair',
  ];

  return staticRoutes.map((route) => ({
    url: `https://www.yourdomain.com${route}`,
    lastModified: new Date(),
  }));
}
