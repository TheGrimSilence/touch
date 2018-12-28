import { addon } from 'base/addon';
import { parseArgs } from 'base/parseArgs';
import { error, info, warn } from 'base/utils/console';
import { help } from 'base/utils/help';
import { version } from 'base/utils/version';
import { writeFile } from 'base/writeFile';

const args = process.argv.slice(2);
const environment = parseArgs(args);
const verbose = environment.verbose;
const content: string[] = [].concat(environment.content);

if (environment.help) {
  help();
} else if (environment.addon) {
  addon({
    addon: environment.addon,
    type: environment.type,
    path: environment.path,
    name: environment.name,
  });
} else if (environment.interactive) {
  error('Interactive Mode currently unavailable.');
} else if (environment.project) {
  warn('Projects currently unavailable.');
} else if (environment.version) {
  version();
} else {
  writeFile(environment._, { content, verbose });
  if (process.env['NODE_ENV'] === 'development') {
    info(environment._);
    info(content);
  }
}

if (process.env['NODE_ENV'] === 'development') {
  console.log(args);
}
