// const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix: isProd ? '/973891422/' : '',
  images: {
    loader: 'cloudinary',
    path: '/',
  },
}
module.exports = nextConfig
