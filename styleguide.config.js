const COMPONENTS_EXT = '{js,jsx}';

module.exports = {
  pagePerSection: true,
  sections: [
    {
      name: 'Components',
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      components: [
        `src/components/**/*.${COMPONENTS_EXT}`,
      ],
      ignore: [],
    },
    {
      name: 'Layout',
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      components: [
        `src/layout/**/*.${COMPONENTS_EXT}`,
      ],
      ignore: [],
    },
  ],
  webpackConfig: {
    devServer: {
      clientLogLevel: 'warn',
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.(css|less)$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        },
      ],
    },
  },
};
