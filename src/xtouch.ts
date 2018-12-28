import { parseArgs } from 'base/parseArgs';
import { error, info } from 'base/utils/console';
import { help } from 'base/utils/help';
import { version } from 'base/utils/version';
import { writeFile } from 'base/writeFile';

const args = process.argv.slice(2);
const environment = parseArgs(args);

// TODO: Support writing template data under different `filename`
// TODO: Add individual command help
// TODO: use `opn` to create a 'issue' command for quick issue reporting
// TODO: issue should support: Bug, Feature
// ? Should we add per-template commands to fill in data?

const verbose = environment.verbose;
const content: string[] = [].concat(environment.content);

// TODO: Clean this up. Drop the IFs and test Events?
if (environment.help) {
  help();
} else if (environment.interactive) {
  error('Interactive Mode currently unavailable.');
} else if (environment.version) {
  version();
} else {
  writeFile(environment._, { verbose, content });
  if (process.env['NODE_ENV'] === 'development') {
    info(environment._);
    info(content);
  }
}

if (process.env['NODE_ENV'] === 'development') {
  console.log(args);
}
