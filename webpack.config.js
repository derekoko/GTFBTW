const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.js', // Update the entry path
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace with your desired output directory
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match JavaScript or JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Apply Babel for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add any necessary presets
          },
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
