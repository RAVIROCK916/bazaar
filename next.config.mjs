/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.jiomart.com",
      },
    ],
  },
};

export default nextConfig;
