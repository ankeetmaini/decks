module.exports = {
  plugins: [
    "gatsby-theme-mdx-deck",
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["@mdx-deck/gatsby-plugin"],
      },
    },
  ],
}
