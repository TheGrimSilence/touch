import { Configuration } from 'webpack';
import * as path from 'path';
import { outDir, appSrc, appNodeModules } from '../config/paths';

const config: Configuration = {
  entry: path.resolve(appSrc, 'touch.ts'),
  mode: 'production',
  target: 'async-node',
  output: {
    path: outDir,
    filename: 'touch.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    modules: ['node_modules', appNodeModules].concat(appSrc || []),
  },
  module: {
    rules: [
      {
        test: /.ts/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
