import chalk from 'chalk';
import { readFileSync } from 'fs';

const json = { name: '@xploration-tech/xtouch', version: '2.2.2' };
// const json = readFileSync('../package.json', 'utf8');
const pkg = json;
// const pkg = JSON.parse(json);

/**
 * Returns the name and version of the package.
 */
export function version(): void {
  console.log(chalk`
  {cyan ${pkg.name}} {magenta v${pkg.version}}
  Copyright (C) Xploration Technologies. All rights reserved.
  `);
}
