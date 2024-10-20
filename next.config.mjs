import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };

    return config;
  },
  reactStrictMode: true,
  images: {
      domains: ['uzeyiraskyer.com'],
  },
};

export default withNextIntl(nextConfig);
