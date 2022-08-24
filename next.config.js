/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
}
module.exports = nextConfig
