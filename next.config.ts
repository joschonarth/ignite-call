import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
