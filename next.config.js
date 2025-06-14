/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  // Uncomment and modify if deploying to a subdirectory
  // basePath: '/your-base-path'
}

module.exports = nextConfig
