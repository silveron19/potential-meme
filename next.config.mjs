/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cari-video',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
