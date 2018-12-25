import { writeFileSync } from 'fs';
import { join } from 'path';

export function writeEmptyFile(files: string[]) {
  files.forEach((file) => {
    const contents = '';
    writeFileSync(join(__dirname, '..', 'temp', file), contents, 'utf8');
  });
}
