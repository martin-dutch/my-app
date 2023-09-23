const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // ...other webpack configurations
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      // ...other plugins
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          // ...other rules
        ],
      },      
  };
  