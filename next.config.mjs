import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/docs/toriime',
      permanent: true,
    },
    {
      source: '/docs',
      destination: '/docs/toriime',
      permanent: true,
    }
  ],
};

export default withMDX(config);
