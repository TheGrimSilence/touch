import * as chalk from 'chalk';
import { writeFileSync } from 'fs';
const args = process.argv.slice(2);

// TODO: Are we creating a file, running interactive, or creating a project?

console.log(args);

console.log(chalk.default`{red Test}`);

writeFileSync()