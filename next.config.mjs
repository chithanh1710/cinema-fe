/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.galaxycine.vn",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "www.galaxycine.vn",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "imgcinema.blob.core.windows.net",
        pathname: "/img/**",
      },
    ],
    unoptimized:true,
  },
};

export default nextConfig;
