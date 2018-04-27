'use strict';

const webpack                 = require('webpack');
const path                    = require('path');
const BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HtmlWebpackPlugin       = require('html-webpack-plugin');
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const BabelLoader             = require('babel-loader');


//const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
//const config                  = require('../app.config')(true);

// the path(s) that should be cleaned
let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root:     '/full/webpack/root/path',
  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false,
  beforeEmit: true
}

module.exports =  {

    mode: 'production',
  
    entry: {
      "application-shell":  './src/application-shell.js',
      "one-two":            './src/one-two.js',
      "wrong-page":         './src/wrong-page.js',
      "send-feedback":      './src/send-feedback.js'
  },
  
    resolve: {
      modules:    [ "node_modules", path.resolve(__dirname, 'node_modules') ],
      extensions: [".js", ".json"]
    },
  
    output: {
      path: path.resolve(__dirname, 'dist'), filename: '[name].js',
    },
  
    module: {
      rules: [
        { test: /\.html$/,  exclude: /(node_modules|bower_components)/, use: 'html-loader' },
        { test: /\.js$/, use: 'babel-loader'},
        { test: /\.json$/,  exclude: /(node_modules|bower_components)/, use: 'json-loader' }
      ]
    },
  
    plugins: [
      
      new BundleAnalyzerPlugin(),

      // new CleanWebpackPlugin( [ config.outputDir ], { root: resolve(__dirname, '/src/') } ) ,
      new CleanWebpackPlugin(pathsToClean, cleanOptions),

      new HtmlWebpackPlugin({template: './index.html'}),
/**
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        }
      })

      // new ScriptExtHtmlWebpackPlugin( { defer: [ 'webcomponents-loader.js' ], } ),
 
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/*.js'),
          to: './scripts/wc',
          ignore: ['webcomponents-loader.js'],
          flatten: true,
        },
      ]),

      new HtmlWebpackPlugin( {
        config,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortAttributes: true,
          sortClassName: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
        },
        hash: true,
        inject: true,
      }),
*/
    ],
  
  };
