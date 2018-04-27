'use strict';

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const outputPath = resolve('dist');
const IS_DEV_SERVER = process.argv.find(arg => arg.includes('webpack-dev-server'));

module.exports = () => {
    entry: "./application-shell.js",

    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          // We need to transpile Polymer itself and other ES6 code
          // exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[
                'env',
                {
                  targets: {browsers: ['last 2 Chrome versions', 'Safari 10']},
                  debug: true
                }
              ]],
              plugins: [['transform-object-rest-spread', {useBuiltIns: true}]]
            }
          }
        }
      ]
    },
    plugins: IS_DEV_SERVER ? [] : [
      new CleanWebpackPlugin([outputPath], {verbose: true})
    ]

};