/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rerollcdn.com",
        pathname: "/**"
      }
    ]
  }
};

module.exports = nextConfig;
