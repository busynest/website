/*
import CopyWebpackPlugin  from 'copy-webpack-plugin';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
*/
const CopyWebpackPlugin     = require('copy-webpack-plugin');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const WorkboxWebpackPlugin  = require('workbox-webpack-plugin');

module.exports = {

  // DEVELOPMENT
  devServer: {
    historyApiFallback: true
  },

  // INPUT
  entry: path.resolve(__dirname, 'deploy/application-shell.js'),

  // OUTPUT
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
  },

  // RESOLVE
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ],
  },

  // BUILD
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        // EXCLUDE
        exclude: {
          exclude: [
   
          ]
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: {ie: '11'}}]
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },

  // PLUGINS
  plugins: [
    
    new CopyWebpackPlugin([
      'images/**',
      'node_modules/@webcomponents/webcomponentsjs/**',
      'manifest.json',
      'polymer.json',
      'sitemap.xml',
      'robots.txt',
      'ads.txt',
      'firebase-messaging-sw.js',
      'TERMS.md'
    ]),

    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      template: 'index.html'
    }),
/*
    new InjectManifest({
      swSrc: './src/sw.js',
    }),
*/
    new WorkboxWebpackPlugin.GenerateSW({
      include: ['index.html', 'manifest.json', /\.js$/],
      exclude: [/\/@webcomponents\/webcomponentsjs\//],
      navigateFallback: 'index.html',
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /\/@webcomponents\/webcomponentsjs\//,
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: /^https:\/\/fonts.gstatic.com\//,
          handler: 'staleWhileRevalidate'
        }
      ]
    })

  ]
};