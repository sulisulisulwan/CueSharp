
module.exports = {
  mode: 'development',
  entry: __dirname + '/frontend/src/index.js',
  output: {
    path: __dirname + '/frontend/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
}