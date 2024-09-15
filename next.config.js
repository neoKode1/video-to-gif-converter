/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  swcMinify: true,       
}

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    nodeModules: ['fs-extra'],
  },
}

