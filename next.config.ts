/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚫 disables eslint blocking build
  },
};

export default nextConfig;
