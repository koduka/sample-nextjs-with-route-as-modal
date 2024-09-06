/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/test02/:id',
        destination: '/?id=:id',
      },
    ]
  },
}

export default nextConfig
