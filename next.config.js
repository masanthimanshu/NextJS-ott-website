/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://ott-backend-t3a7.onrender.com",
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
