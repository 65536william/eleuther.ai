module.exports = {
  reactStrictMode: true,
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: [/\.md$/, /\.mdx$/],
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
};
