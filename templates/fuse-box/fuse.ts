import { FuseBox, Sparky } from 'fuse-box';
// @ts-ignore
import * as pkg from './package.json';

let fuse: FuseBox;

Sparky.task('default', () => {
  fuse = FuseBox.init({
    homeDir: 'src',
    output: 'lib',
    target: 'server@es6',
  });

  fuse.bundle(pkg.name).instructions('> index.ts');
});
