/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's strict mode
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true // Required for static export
  },
  
  // Disable the static export
  // output: 'export', // Commented out for Vercel's serverless functions
  
  // Add trailing slashes to all paths
  trailingSlash: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Enable static HTML export for all pages
  // (Vercel will handle this automatically)
  // output: 'export',
  
  // Uncomment and modify if deploying to a subdirectory
  // basePath: '/your-base-path'
}

module.exports = nextConfig
