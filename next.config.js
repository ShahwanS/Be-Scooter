/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Set the Content-Security-Policy header to allow unsafe-eval in script-src
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "script-src 'self' 'unsafe-eval'; object-src 'self';",
            },
          ],
        },
      ];
    },
  };
  

module.exports = nextConfig
