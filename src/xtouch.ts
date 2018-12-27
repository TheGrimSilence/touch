import { parseArgs } from 'base/parseArgs';
import { error } from 'base/utils/console';
import { version } from 'base/version';
import { writeFile } from 'base/writeFile';
import chalk from 'chalk';

const args = process.argv.slice(2);
const environment = parseArgs(args);

// TODO: Are we creating a file `else`, running interactive `env.interactive`,
// TODO: or creating a project ?
// TODO: Support writing template data under different `filename`
// ? Should we add per-template commands to fill in data?

const verbose = environment.verbose;

if (environment.help) {
  console.log(chalk`{red You've selected: help!}`);
} else if (environment.interactive) {
  error('Interactive Mode currently unavailable.');
} else if (environment.version) {
  version();
} else {
  writeFile(environment._, verbose);
}
