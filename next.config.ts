import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Uncomment this if you are using webpack and not Turbopack */
  // webpack: (config) => {
  //   config.module.parser = {
  //     ...config.module.parser,
  //     javascript: {
  //       ...config.module.parser?.javascript,
  //       url: false, // disable parsing of `new URL()` syntax
  //     },
  //   };
  //   return config;
  // },
};

export default nextConfig;
