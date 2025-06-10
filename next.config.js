/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // Configure for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/etismoc' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/etismoc' : '',
}

module.exports = nextConfig
