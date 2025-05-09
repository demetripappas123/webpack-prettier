import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve('dist'),
    },
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
};
