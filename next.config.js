const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NOTION_TOKEN: process.env.NOTION_TOKEN,
    READING_LIST_DB_ID: process.env.READING_LIST_DB_ID,
  }
}

module.exports = withContentlayer(nextConfig)
