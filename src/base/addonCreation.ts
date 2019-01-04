import * as root from 'app-root-path';
import { errorVerbose, infoVerbose, warnVerbose } from 'base/utils/console';
import { edit } from 'base/utils/json/edit';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface IAddonOptions {
  /** Selects an addon to import. */
  addon: string;
  /** Should we add dependencies to the users package.json? */
  noDependencies?: boolean;
  /** Should we add scripts to the users package.json? */
  noScripts?: boolean;
  /** The path to place the addon under. */
  path?: string;
  /** The name to use in the addon creation. Replaces all `__NAME__` instances. */
  name?: string;
  /** Disables writing of file. */
  testMode?: boolean;
  /** Selects the appropriate addon file to import. */
  type: string;
}

/** The configuration for an addon */
export interface IAddonConfig {
  /** The name of the created addon. */
  filename: string;
  /** The default location of the addon, can be ignored, or overridden by path. */
  defaultPath: string;
  /** The scripts to add to the users `package.json`. */
  scripts: IPair;
  /** The dependencies to add to the users `package.json`. */
  dependencies: IPair;
  /** The devDependencies to add to the users `package.json`. */
  devDependencies: IPair;
}

interface IPair {
  [arg: string]: any;
}

/**
 * Selects an addon to create.
 */
export function addonCreation(options: IAddonOptions): void {
  const path = join(root.path, '..', 'addons', options.addon);
  const addon = readFileSync(join(path, options.type), 'utf8');
  const config: IAddonConfig = JSON.parse(
    readFileSync(join(path, `${options.type}.json`), 'utf8'),
  );

  infoVerbose(`Selected: ${options.addon} ${options.type}`);

  handleScripts(config.scripts, options.noScripts);
  handleDependencies(config.dependencies, options.noDependencies);
  handleDevDependencies(config.devDependencies, options.noDependencies);

  if (!options.testMode) {
    infoVerbose(
      `Current path: ${
        options.path
          ? join(process.cwd(), options.path)
          : config.defaultPath
          ? join(process.cwd(), config.defaultPath)
          : process.cwd()
      }`,
    );

    mkdirSync(
      options.path
        ? join(process.cwd(), options.path)
        : config.defaultPath
        ? join(process.cwd(), config.defaultPath)
        : '.',
      {
        recursive: true,
      },
    );

    writeFileSync(
      options.path
        ? join(process.cwd(), options.path, config.filename)
        : config.defaultPath
        ? join(process.cwd(), config.defaultPath, config.filename)
        : join(process.cwd(), config.filename),
      options.name !== undefined
        ? addon.replace(/__NAME__/gm, options.name)
        : addon,
      'utf8',
    );
  }
}

function isEmpty(obj: {}): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

function handleScripts(config: IPair, noScripts: boolean): void {
  if (config === undefined) {
    errorVerbose('Scripts returned undefined, aborting.');
    throw new Error(`config.scripts cannot be undefined, check configuration`);
  } else if (config === null || isEmpty(config)) {
    warnVerbose(`No scripts were found, returning.`);

    return;
  } else if (noScripts) {
    warnVerbose('no-scripts detected, ignoring scripts');
  }

  infoVerbose(`Scripts:`, JSON.stringify(config));
  infoVerbose(`Updating package.json`);
  edit('scripts', config);
}

function handleDependencies(config: IPair, noDependencies: boolean): void {
  if (config === undefined) {
    errorVerbose('Dependencies returned undefined, aborting.');
    throw new Error(
      `config.dependencies cannot be undefined, check configuration`,
    );
  } else if (config === null || isEmpty(config)) {
    warnVerbose(`No dependencies were found, returning.`);

    return;
  } else if (noDependencies) {
    warnVerbose('no-dependencies detected, ignoring dependencies');
  }

  infoVerbose(`Dependencies:`, JSON.stringify(config));
  infoVerbose(`Updating package.json`);
  edit('dependencies', config);
}

function handleDevDependencies(config: IPair, noDependencies: boolean): void {
  if (config === undefined) {
    errorVerbose('DevDependencies returned undefined, aborting.');
    throw new Error(
      `config.devDependencies cannot be undefined, check configuration`,
    );
  } else if (config === null || isEmpty(config)) {
    warnVerbose(`No devDependencies were found, returning.`);

    return;
  } else if (noDependencies) {
    warnVerbose('no-dependencies detected, ignoring devDependencies');
  }

  infoVerbose(`DevDependencies:`, JSON.stringify(config));
  infoVerbose(`Updating package.json`);
  edit('devDependencies', config);
}
