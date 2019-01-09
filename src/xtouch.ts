import { addonCreation } from 'base/addonCreation';
import { fileCreation } from 'base/fileCreation';
import { help } from 'base/help';
import { error, infoVerbose } from 'base/utils/console';
import { parseArgs } from 'base/utils/parseArgs';
import { version } from 'base/version';

const args = process.argv.slice(2);
const environment = parseArgs(args);
verbose = environment.verbose;
const content: string[] = [].concat(environment.content);

if (environment.help) {
  help();
} else if (environment.addon) {
  infoVerbose(`Addon Creation`);
  addonCreation({
    addon: environment.addon,
    type: environment.type,
    path: environment.path,
    name: environment.name,
    noScripts: environment.noScripts,
    noDependencies: environment.noDependencies,
    testMode: environment.testMode,
  });
} else if (environment.interactive) {
  error('Interactive Mode currently unavailable.');
} else if (environment.project) {
  error('Projects currently unavailable.');
} else if (environment.version) {
  version();
} else {
  infoVerbose(`File Creation`);
  fileCreation(environment._, {
    content,
    extension: environment.extension,
    path: environment.path,
  });
}
