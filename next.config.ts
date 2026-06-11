import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: "object-src 'none'; base-uri 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.bokun.io https://js.stripe.com https://www.googletagmanager.com; frame-src 'self' https://*.bokun.io https://js.stripe.com; connect-src 'self' https://*.bokun.io https://api.stripe.com https://*.google-analytics.com; img-src 'self' data: https://*.bokun.io https://*.google-analytics.com https://www.googletagmanager.com;"
  }
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;