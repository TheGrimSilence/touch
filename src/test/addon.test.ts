import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

import { addonCreation } from '../base/addonCreation';

import rimraf = require('rimraf');

const hash = '83a9999ac29bb5ed086930699e307649';
const path = 'temp';

describe('Addon functionality', () => {
  test('Successfully creates an addon with a path', () => {
    addonCreation({ addon: 'fuse-box', type: 'module.ts', path });

    expect(existsSync(join(process.cwd(), path, 'fuse.ts'))).toBeTruthy();

    // tslint:disable-next-line: no-empty
    rimraf('temp', () => {});
  });

  test('Successfully creates an addon with a name', () => {
    addonCreation({ addon: 'fuse-box', type: 'module.ts', name: hash, path });

    expect(
      existsSync(join(process.cwd(), 'fuse.ts')) &&
        /(?:83a9999ac29bb5ed086930699e307649)/gm.test(
          readFileSync(join(process.cwd(), path, 'fuse.ts'), 'utf8'),
        ),
    ).toBeTruthy();

    // tslint:disable-next-line: no-empty
    rimraf('temp', () => {});
  });
});
