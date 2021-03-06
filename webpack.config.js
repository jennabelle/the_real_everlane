module.exports = {
  entry: [
    './src/index.js'
    ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
