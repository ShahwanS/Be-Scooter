

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.it-recht-kanzlei.de'],
  },
    async headers() {
      return [
        {
          // Set the Content-Security-Policy header to allow unsafe-eval in script-src
          source: '/(.*)',
          
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' https://cdn.vercel-insights.com https://cdnjs.cloudflare.com 'unsafe-eval'; object-src 'self'; ",
            },
            
          ],
        },
      ];
    },
  };
  

module.exports = nextConfig
