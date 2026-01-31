/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export and creates the 'out' folder
  images: {
    unoptimized: true, // Required for static export when using next/image
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