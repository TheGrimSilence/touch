import { existsSync } from 'fs';
import { join } from 'path';

import { fileCreation } from '../base/fileCreation';

import rimraf = require('rimraf');

const files: string[] = [
  'temp/file1.txt',
  'temp/file2',
  'temp/testy/westy/foo/bar/fileDeep',
];
const file: string[] = ['temp/file1single'];

const tempDir = join(__dirname, '..', '..', 'temp');
console.log(process.cwd());

test.skip('Successfully creates a single file', () => {
  fileCreation(file);

  expect(existsSync(join(file[0]))).toBeTruthy();

  console.log(process.cwd());
  // tslint:disable-next-line: no-empty
  rimraf('temp', () => {});
});

test.skip('Successfully creates multiple files', () => {
  fileCreation(files);

  files.forEach((x) => {
    expect(existsSync(join(x))).toBeTruthy();
  });

  console.log(process.cwd());
  // tslint:disable-next-line: no-empty
  rimraf('temp', () => {});
});

console.log(process.cwd());
console.log(tempDir);
