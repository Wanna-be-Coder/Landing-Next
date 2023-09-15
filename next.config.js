/** @type {import('next').NextConfig} */

const nextConfig = {
  withImages: ["next-images"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
