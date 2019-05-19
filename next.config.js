const withCSS = require('@zeit/next-css'); //eslint-disable-line
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages();

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    return config;
  }
};

module.exports = withCSS({
  target: 'serverless',
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    });
    return config;
  }
});
