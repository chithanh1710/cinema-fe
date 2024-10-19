/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.galaxycine.vn",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
