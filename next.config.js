/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL: process.env.URL,
    BASE_URL: process.env.BASE_URL,
    AUTH_BASE_URL: process.env.AUTH_BASE_URL,
    STRIPE_PK: process.env.STRIPE_PK,
  },
};

module.exports = nextConfig;
