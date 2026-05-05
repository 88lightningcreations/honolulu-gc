/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['9000-firebase-honolulu-gc-1769988572084.cluster-lr6dwlc2lzbcctqhqorax5zmro.cloudworkstations.dev'],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // General Redirects
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/cgi-sys/defaultwebpage.cgi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/test/',
        destination: '/',
        permanent: true,
      },
      // Blog Redirects
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/2018/01/18/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      {
        source: '/blog/page/:page',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/author/:author/page/:page',
        destination: '/blog',
        permanent: true,
      },
       // Old service pages
       {
        source: '/kitchen-remodeling',
        destination: '/services/kitchen-remodeling',
        permanent: true,
      },
      {
        source: '/first-floor-addition',
        destination: '/services/additions',
        permanent: true,
      },
      {
        source: '/:path*-old',
        destination: '/:path*',
        permanent: true,
      },
      // query based redirects
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'page_id',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'no_redirect',
            value: 'true',
          },
        ],
        destination: '/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
