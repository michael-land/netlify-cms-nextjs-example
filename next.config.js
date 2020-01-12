const path = require("path");

module.exports = {
  webpack: config => {
    config.resolve.alias["@"] = path.join(__dirname, "src");

    config.node = { fs: "empty" };

    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] }
    });
    return config;
  }
};
