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
    }, {
      protocol: "https",
      hostname: "tech.kakaopay.com"
    }, {
      protocol: "https",
      hostname: "fe-developers.kakaoent.com"
    }, {
      protocol: "https",
      hostname: "techblog.woowahan.com"
    }, {
      protocol: "https",
      hostname: "wp.toss.tech"
    }, {
      protocol: "https",
      hostname: "vos.line-scdn.net"
    }, {
      protocol: "https",
      hostname: "yozm.wishket.com"
    }, {
      protocol: "https",
      hostname: "yt3.googleusercontent.com"
    }],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src"
    }
};

export default nextConfig;
