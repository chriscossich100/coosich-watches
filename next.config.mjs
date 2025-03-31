/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3030",
        pathname: "/static/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2.5mb',
    }
  }
};

export default nextConfig;
