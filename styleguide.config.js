module.exports = {
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ]
      },
      resolve:{
        extensions: [ '.tsx', '.ts', '.js' ],
      }
    },
    propsParser: require("react-docgen-typescript").withCustomConfig(
      "./tsconfig.json",
      // [parserOptions]
    ).parse,
  };