import { pkg } from 'base/utils/package';
import chalk from 'chalk';

/**
 * Returns the name and version of the package.
 */
export function version(): void {
  console.log(chalk`
  {cyan ${pkg.name}} {magenta v${pkg.version}}
  Copyright (C) ${new Date().getFullYear().toString()} ${
    pkg.company
  }. All rights reserved.
  `);
}
