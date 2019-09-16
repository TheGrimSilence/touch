import { Configuration } from 'webpack';
import * as path from 'path';
import { outDir } from '../config/paths';

const config: Configuration = {
  entry: path.resolve(__dirname, '..', 'src', 'xtouch.ts'),
  mode: 'production',
  target: 'async-node',
  output: {
    path: outDir,
    filename: 'xtouch.js',
  },
  resolve: {
    extensions: ['.ts', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /.ts/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};

export default config;
