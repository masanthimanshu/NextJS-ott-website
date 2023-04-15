/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  env: {
<<<<<<< HEAD
    API_URL: "https://ott-backend-t3a7.onrender.com",
=======
    API_URL: "http://localhost:3000/api",
>>>>>>> parent of 0162a6a (updates)
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
