import { writeFile } from 'utils/writeFile';

// import * as chalk from 'chalk';
const args = process.argv.slice(2);

// TODO: Are we creating a file, running interactive, or creating a project?

writeFile(args);
