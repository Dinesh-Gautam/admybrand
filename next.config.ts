import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
