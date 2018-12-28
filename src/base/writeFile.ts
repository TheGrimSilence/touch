import chalk from 'chalk';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import { parsePath } from './parsePath';

interface IWriteFileOptions {
  verbose?: boolean;
  content?: string[];
}

/**
 * Create files with the given parameters.
 * @param files The files to be created.
 * @param contents The data to be written into the files
 */
export function writeFile(files: string[], options?: IWriteFileOptions): void {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileInfo = parsePath(file);

    if (options.verbose) {
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
      options.content[i] === undefined ? '' : options.content[i],
      'utf8',
    );
  }
}
