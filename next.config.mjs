import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['uzeyiraskyer.com'],
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
