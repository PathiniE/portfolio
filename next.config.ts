import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages deployment
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // Configure trailing slashes
  trailingSlash: true,
  
  // Configure images for static export
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  
  // Uncomment if deploying to a repository (not username.github.io)
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
  
  // Turbopack configuration
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;