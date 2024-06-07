/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    ignoreDuringBuilds: true,
  },
};

export default config;
