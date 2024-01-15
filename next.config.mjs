/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions:true
  },
  images: {
    domains: ['images.unsplash.com','tinyurl.com']
 }
}

export default nextConfig
