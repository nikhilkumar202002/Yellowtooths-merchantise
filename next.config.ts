/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devadmin.yellowtooths.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;