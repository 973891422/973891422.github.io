/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  images: {
    domains: ['cn.bing.com'],
  },
}
module.exports = nextConfig
