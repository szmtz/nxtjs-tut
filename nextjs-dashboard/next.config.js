/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Required for Vercel deployment
  serverExternalPackages: ['bcrypt'],
  // Ensure Next.js uses SSR by default
  output: 'standalone',
};

module.exports = nextConfig;