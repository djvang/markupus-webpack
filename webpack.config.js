const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  assets: path.join(__dirname, 'markup/assets'),
  dist: path.join(__dirname, 'markup/dist')
}

module.exports = {
  context: paths.assets,
  entry: {
    "main": ["./scripts/main.js", "./styles/main.scss"],
    "main2": ["./styles/main.less"]
  },
  output: {
    path: paths.dist,
    filename: 'scripts/[name].js'
  },
  // stats: {
  //   hash: false,
  //   version: false,
  //   timings: false,
  //   children: false,
  //   errors: false,
  //   errorDetails: false,
  //   warnings: false,
  //   chunks: false,
  //   modules: false,
  //   reasons: false,
  //   source: false,
  //   publicPath: false
  // },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   include: paths.assets,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style',
      //     use: [
      //       {
      //         loader: 'cache'
      //       }, {
      //         loader: 'css',
      //         options: {
      //           sourceMap: true
      //         }
      //       }, {
      //         loader: 'postcss',
      //         options: {
      //           sourceMap: true
      //         }
      //       }
      //     ]
      //   })
      // }, {
      //   test: /\.scss$/,
      //   include: paths.assets,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style',
      //     use: [
      //       {
      //         loader: 'cache'
      //       }, {
      //         loader: 'css',
      //         options: {
      //           sourceMap: true
      //         }
      //       }, {
      //         loader: 'postcss',
      //         options: {
      //           sourceMap: true
      //         }
      //       }, {
      //         loader: 'resolve-url',
      //         options: {
      //           sourceMap: true
      //         }
      //       }, {
      //         loader: 'sass',
      //         options: {
      //           sourceMap: true
      //         }
      //       }
      //     ]
      //   })
      // },
      {
        test: /\.less/,
        include: paths.assets,
        use: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            {
              loader: 'cache'
            }, {
              loader: 'css',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'resolve-url',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'less',
              options: {
                sourceMap: true,
                strictMath: true,
                noIeCompat: true
                }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    modules: [
      paths.assets, 'node_modules', 'bower_components'
    ],
    enforceExtension: false
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  plugins: [
    new ExtractTextPlugin({filename: `styles/[name].css`, allChunks: true}),
  ]
}
