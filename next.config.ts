import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["image.tmdb.org"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
