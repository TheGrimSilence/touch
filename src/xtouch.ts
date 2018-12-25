import { writeEmptyFile } from 'utils/writeFile';

// import * as chalk from 'chalk';
const args = process.argv.slice(2);

// TODO: Are we creating a file, running interactive, or creating a project?

// ! TODO: Add support for paths!

console.log(args);

// console.log(chalk.default`{red Test}`);

writeEmptyFile(args);
