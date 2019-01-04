import * as root from 'app-root-path';
import { buildObject } from 'base/utils/buildObject';
import { info } from 'base/utils/console';
import { pkg } from 'base/utils/package';
import { returnMatches } from 'base/utils/returnMatches';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const filename = /(?:\/\/ @xt-filename(?:\s|=|:)(.*))/m;
const script = /(?:\/\/ @xt-script(?:\s|:|=)([a-zA-Z]*)(?:\s|:|=)"(.*)")/g;

const dependency = /(?:\/\/ @xt-dependency(?:\s|:|=)((?:@[a-z]*\/[a-z]*)|(?:[a-z]*))@((?:~?[0-9]+\.[0-9]+\.[0-9]+)|([a-z]*)))/gm;
const devDependency = /(?:\/\/ @xt-devDependency(?:\s|:|=)((?:@[a-z]*\/[a-z]*)|(?:[a-z]*))@((?:~?[0-9]+\.[0-9]+\.[0-9]+)|([a-z]*)))/gm;

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
  /** Output verbose messages on internal operations. */
  verbose?: boolean;
}

/**
 * Selects an addon to create.
 */
export function addon(options: IAddonOptions): void {
  const path = join(root.path, '..', 'addons');
  const addonPath = join(path, options.addon, options.type);
  const addonData = readFileSync(addonPath, 'utf8');
  const data = addonData
    .split('\n')
    .slice(1)
    .join('\n');

  info(`XT-Filename:`, filename.exec(addonData)[1]);
  handleScripts(addonData, options.noScripts, options.verbose);
  handleDependencies(addonData, options.noDependencies, options.verbose);
  handleDevDependencies(addonData, options.noDependencies, options.verbose);

  if (options.verbose) {
    info(`CWD: ${process.cwd()}`);
  }

  mkdirSync(options.path === undefined ? '.' : options.path, {
    recursive: true,
  });

  writeFileSync(
    options.path
      ? join(process.cwd(), options.path, filename.exec(addonData)[1])
      : join(process.cwd(), filename.exec(addonData)[1]),
    options.name !== undefined
      ? data.replace(/__NAME__/gm, options.name)
      : data,
    'utf8',
  );

  if (process.env['NODE_ENV'] === 'development') {
    console.log('Old Data:\n' + data);
    console.log('Filename:', filename);
  }
}

/**
 * Check for the existence of scripts.
 * @param data the module to check
 */
function checkScripts(data: string, verbose?: boolean): boolean {
  const scriptExists = script.test(data);

  if (scriptExists) {
    return true;
  } else {
    return false;
  }
}

/**
 * Check for the existence of dependencies.
 * @param data the module to check
 */
function checkDependencies(data: string, verbose?: boolean) {
  const dependencyExists = dependency.test(data);

  if (dependencyExists) {
    return true;
  } else {
    return false;
  }
}

/**
 * Check for the existence of devDependencies.
 * @param data the module to check
 */
function checkDevDependencies(data: string, verbose?: boolean) {
  const devDependencyExists = devDependency.test(data);

  if (devDependencyExists) {
    return true;
  } else {
    return false;
  }
}

/** Add scripts to users package.json */
async function handleScripts(
  data: string,
  noScripts: boolean,
  verbose?: boolean,
) {
  const exists = await checkScripts(data);

  if (!exists || noScripts) {
    if (verbose) {
      noScripts
        ? info('no-scripts detected, Bypassing scripts')
        : info('No scripts to write, returning');
    }

    return;
  }

  // ! We have to call this before the main code, otherwise it breaks. Literally no reason for it.
  returnMatches(data, script, 1);
  const object = buildObject(data, script);
  Object.assign(object, pkg.scripts);
}

/** Add dependencies to users package.json */
function handleDependencies(
  data: string,
  noDependencies: boolean,
  verbose?: boolean,
) {
  const exists = checkDependencies(data);

  if (!exists || noDependencies) {
    if (verbose) {
      noDependencies
        ? info('no-dependencies detected, Bypassing dependencies')
        : info('No dependencies to write, returning');
    }

    return;
  }
}

/** Add devDependencies to users package.json */
function handleDevDependencies(
  data: string,
  noDependencies: boolean,
  verbose?: boolean,
) {
  const exists = checkDevDependencies(data);

  if (!exists || noDependencies) {
    if (verbose) {
      noDependencies
        ? info('no-dependencies detected, Bypassing dependencies')
        : info('No devDependencies to write, returning');
    }

    return;
  }
}
