import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: ["dist/**", "src/**", "vite.config.js", "index.html"],
  },
];

export default config;
