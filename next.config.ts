import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  output: "standalone", // yoki 'export' SSG uchun
  trailingSlash: true, // barcha URL-larga / qo'shish
};

export default nextConfig;
