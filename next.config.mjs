/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    // https://nextjs.org/docs/architecture/nextjs-compiler#emotion
    emotion: {
      sourceMap: true,
      autoLabel: 'always',
      labelFormat: '[local]',
    },
  },

  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "figma-alpha-api.s3.us-west-2.amazonaws.com"
    }],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src"
  }
};

export default nextConfig;
