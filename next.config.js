/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['9000-firebase-honolulu-gc-1769988572084.cluster-lr6dwlc2lzbcctqhqorax5zmro.cloudworkstations.dev'],
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
