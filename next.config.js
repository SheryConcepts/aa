/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  }
}

module.exports = nextConfig
