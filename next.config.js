/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React's strict mode
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true // Disable image optimization for static export
  },
  
  // Enable static export for Vercel
  output: 'export',
  
  // Add trailing slashes to all paths
  trailingSlash: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Copy files from public to out directory
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    const fs = require('fs');
    const path = require('path');
    
    // Copy all files from public to out/_next/static/media
    const publicDir = path.join(dir, 'public');
    const outMediaDir = path.join(outDir, '_next/static/media');
    
    // Ensure the target directory exists
    if (!fs.existsSync(outMediaDir)) {
      fs.mkdirSync(outMediaDir, { recursive: true });
    }
    
    // Copy each file from public to out/_next/static/media
    const files = fs.readdirSync(publicDir);
    files.forEach(file => {
      fs.copyFileSync(
        path.join(publicDir, file),
        path.join(outMediaDir, file)
      );
    });
    
    return defaultPathMap;
  },
  
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
