/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "https://nextjs-ott.vercel.app/api",
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
