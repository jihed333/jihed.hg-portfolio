/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static exports
  distDir: 'out', // Output directory for the static export
  // Optional: Add a trailing slash for all paths
  trailingSlash: true,
  // Optional: Enable React DevTools in production
  reactDevOverlay: false,
  // Optional: Change the build output directory
  // distDir: 'build',
}

module.exports = nextConfig
