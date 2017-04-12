const { root } = require('./helpers');

module.exports = {
    entry: {
      fontawesome: "./node_modules/font-awesome/css/font-awesome.min.css",
      theme: "./node_modules/primeng/resources/themes/omega/theme.css",
      primeng: "./node_modules/primeng/resources/primeng.min.css"
    },
    output: {
      path: root('./wwwroot/dist'),
    },
    //target: 'web',
    module: {
      rules: [
        //{ test: /\.ts$/, loader: '@ngtools/webpack' },
        //{ test: /\.css$/, loader: ['to-string-loader', 'css-loader'] },
        //{ test: /\.html$/, loader: 'html-loader' },
        //{ test: /\.scss$/, loaders: ['to-string-loader', 'css-loader', 'sass-loader'] },
        //{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000' }
      ]
    },
    plugins: []

  }
