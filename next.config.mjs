/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90, 92, 95],
  },
  async redirects() {
    return [
      {
        source: "/sandals",
        destination: "/collections",
        permanent: true,
      },
      {
        source: "/cart",
        destination: "/collections",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

