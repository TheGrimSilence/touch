import { infoVerbose } from 'base/utils/console';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

import { parsePath } from './utils/parsePath';

export interface IFileCreationOptions {
  content?: string[];
  extension?: string;
  path?: string;
}

/**
 * Create files with the given parameters.
 * @param files The files to be created.
 * @param contents The data to be written into the files.
 */
export function fileCreation(
  files: string[],
  options: IFileCreationOptions,
): void {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileInfo = parsePath(file);

    if (options.path) {
      infoVerbose(`Creating ${fileInfo.base} under ${options.path}`);
    } else if (fileInfo.path !== '.') {
      infoVerbose(`Creating ${fileInfo.base} under ${fileInfo.path}`);
    } else {
      infoVerbose(`Creating ${fileInfo.base}`);
    }

    mkdirSync(options.path ? options.path : fileInfo.path, { recursive: true });

    writeFileSync(
      join(
            process.cwd(),
            options.path ? options.path : fileInfo.path,
            options.extension
              ? `${fileInfo.name}.${options.extension}`
              : fileInfo.base,
          ),
      options.content[i] === undefined ? '' : options.content[i],
      'utf8',
    );
  }
}
