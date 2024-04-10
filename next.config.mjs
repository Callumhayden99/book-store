// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    JWT_SECRET: "YourLongRandomSecretKey", // Replace with your own secure JWT secret
  },
};

export default nextConfig;
