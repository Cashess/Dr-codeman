/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    unoptimized: true, // Disable image optimization for static export mode
    loader: "custom",
    loaderFile: "./loader.ts",
  },
  output: 'export',
};

export default nextConfig;
// next.config.js

