/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/tickets',
        destination: 'https://lu.ma/btwze03o',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
