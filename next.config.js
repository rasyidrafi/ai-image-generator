/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.together.ai',
        pathname: '/imgproxy/**',
      },
    ],
  },
};

module.exports = nextConfig;