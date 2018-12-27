import chalk from 'chalk';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import { parsePath } from './parsePath';

/**
 * Create files with the given parameters.
 * @param files The files to be created.
 * @param contents The data to be written into the files
 */
export function writeFile(files: string[], verbose?: boolean): void {
  let data: string;

  data = '';

  files.forEach((file) => {
    const fileInfo = parsePath(file);

    if (verbose) {
      if (fileInfo.path === '.') {
        console.log(chalk`[{blue info}] {bold Creating} ${fileInfo.base}`);
      } else {
        console.log(
          chalk`[{blue info}] Creating ${fileInfo.base} under ${fileInfo.path}/`,
        );
      }
    }

    mkdirSync(fileInfo.path, { recursive: true });

    writeFileSync(
      join(process.cwd(), fileInfo.path, fileInfo.base),
      data,
      'utf8',
    );
  });
}
