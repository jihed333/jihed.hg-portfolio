/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Remove output: 'export' for Vercel deployment
  // Vercel will handle the static export automatically
  // output: 'export',
  // distDir: '.next', // Use default .next directory for Vercel
  trailingSlash: true,
  reactDevOverlay: false,
  // Enable React's experimental features if needed
  experimental: {
    appDir: true,
  },
  // Add basePath if deploying to a subdirectory
  // basePath: '/your-base-path',
}

module.exports = nextConfig
