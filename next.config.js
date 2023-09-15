/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = withImages(nextConfig);
