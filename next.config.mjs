/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ['http://192.168.31.121:3000'],
  experimental: {
    optimizePackageImports: [
      '@hugeicons/react',
      '@hugeicons/core-free-icons',
      '@radix-ui/react-slot',
      'framer-motion',
      '@use-gesture/react',
    ],
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'mocha-cdn.com' },
      { protocol: 'https', hostname: '5tghbndjb61dnqaj.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'front.agenyz.eu' },
      { protocol: 'https', hostname: 'storage.agenyz.eu' },
      { protocol: 'https', hostname: 'front.agenyz.ru' },
      { protocol: 'https', hostname: 'a0.muscache.com' },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      // Server-side 301: /contact is consolidated into /booking
      { source: '/contact', destination: '/booking', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Cache public images for 1 year
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://js.hs-scripts.com https://js.hsforms.net https://js.hs-banner.com https://js.hs-analytics.net https://js.hscollectedforms.net https://js.usemessages.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.hubspot.com",
              "img-src 'self' https: data: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.supabase.co https://www.google-analytics.com https://wa.me https://vitals.vercel-insights.com https://*.hubspot.com https://*.hs-analytics.net https://*.hubapi.com https://*.hsforms.com https://api.hsforms.com",
              "frame-src https://app.hubspot.com https://forms.hsforms.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://forms.hsforms.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
