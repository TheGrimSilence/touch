import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import { parsePath } from './parsePath';

/**
 * Create files with the given parameters.
 * @param files The files to be created.
 * @param contents The data to be written into the files
 */
export function writeFile(files: string[]) {
  let data: string;

  data = '';

  files.forEach((file) => {
    const fileInfo = parsePath(file);
    mkdirSync(fileInfo.path, { recursive: true });
    writeFileSync(
      join(process.cwd(), fileInfo.path, fileInfo.base),
      data,
      'utf8',
    );
  });
}
