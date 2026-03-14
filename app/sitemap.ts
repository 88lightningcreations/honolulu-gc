
import { MetadataRoute } from 'next';
import { glob } from 'glob';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await glob('app/**/page.tsx');
  const routes = pages
    .map((page) => {
      const route = page
        .replace(/^app/, '')
        .replace(/\/page\.tsx?$/, '')
        .replace(/\/index$/, '');
      if (route === '/not-found') return null;
      return {
        url: `https://dumoreconstruction.com${route || '/'}`, 
        lastModified: new Date(),
      };
    })
    .filter(Boolean) as MetadataRoute.Sitemap;

  return routes;
}
