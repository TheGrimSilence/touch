import { infoVerbose } from 'base/utils/console';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import { parsePath } from './utils/parsePath';

/**
 * Create files with the given parameters.
 * @param files The files to be created.
 * @param contents The data to be written into the files.
 */
export function fileCreation(files: string[], content?: string[]): void {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileInfo = parsePath(file);

    if (fileInfo.path === '.') {
      infoVerbose(`Creating ${fileInfo.base}`);
    } else {
      infoVerbose(`Creating ${fileInfo.base} under ${fileInfo.path}`);
    }

    mkdirSync(fileInfo.path, { recursive: true });

    writeFileSync(
      join(process.cwd(), fileInfo.path, fileInfo.base),
      content[i] === undefined ? '' : content[i],
      'utf8',
    );
  }
}
