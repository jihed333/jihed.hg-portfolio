/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's strict mode
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false // Enable image optimization
  },
  
  // Enable static export for Vercel
  output: 'export',
  
  // Add trailing slashes to all paths
  trailingSlash: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Asset prefix for static exports
  assetPrefix: './',
  
  // Handle static files in the public directory
  distDir: 'out',
  
  // Enable React DevTools in production
  reactStrictMode: true,
  
  // Enable CSS modules
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "@/styles/variables.scss";`
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  
  // Base path if deploying to a subdirectory
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
