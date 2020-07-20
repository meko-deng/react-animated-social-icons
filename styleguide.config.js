module.exports = {
  ignore: ["src/components/*.props.ts","src/components/*.test.tsx"],
  showSidebar: false,
  usageMode: "expand",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  },
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
    // [parserOptions]
  ).parse,
}
