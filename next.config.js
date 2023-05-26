/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },
  images: {
    domains: [ "cdn.sanity.io", "avatars.githubusercontent.com", "this.png", "rap.png"],
  },
}
