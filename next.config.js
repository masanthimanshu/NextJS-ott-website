/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:3000/api",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/category/home",
      },
    ];
  },
};

export default nextConfig;
