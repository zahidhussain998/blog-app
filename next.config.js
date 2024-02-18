/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    metadata: {
      metadataBase: new URL("https://www.netialap.com/"),
    },
  },
  images: {
    domains: ["cdn.sanity.io", "avatars.githubusercontent.com", "this.png", "rap.png"],
  },
};