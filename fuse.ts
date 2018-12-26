import { FuseBox, QuantumPlugin, Sparky } from 'fuse-box';

Sparky.task('default', () => {
  const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'lib/$name.js',
    target: 'npm@es6',
    plugins: [
      // QuantumPlugin({
      //   uglify: true,
      //   target: 'npm@es6',
      //   bakeApiIntoBundle: true,
      //   containedAPI: true,
      //   noConflictApi: true,
      // }),
    ],
  });

  fuse.bundle('xtouch').instructions('> xtouch.ts');
  fuse.run();
});
