'use strict';

const webpack                 = require('webpack');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const path                    = require('path');
const BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports =  {

    mode: 'production',
  
    entry: './src/application-shell.js',
  
    resolve: {
      modules: [ "node_modules", path.resolve(__dirname, 'node_modules') ],
      extensions: [".js", ".json"]
    },
  
    output: {
      path: path.resolve(__dirname, 'dist'), filename: 'application-shell.js',
    },
  
    module: {
      rules: [
        { test: /\.html$/,  use: 'html-loader' },
        { test: /\.js$/,    exclude: /node_modules/, use: 'babel-loader' },
        { test: /\.json$/,  exclude: /node_modules/, use: 'json-loader' }
      ]
    },
  
    plugins: [ new BundleAnalyzerPlugin() ],
  
  };
