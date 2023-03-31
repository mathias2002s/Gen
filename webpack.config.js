import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
    entry: './src/Frontend/index.js',
    output: {
      path: __dirname + '/src/public/js',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    }
}



