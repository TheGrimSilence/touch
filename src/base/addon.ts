import * as root from 'app-root-path';
import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

interface IAddonOptions {
  /** Selects an addon to import. */
  addon: string;
  /** The path to place the addon under. */
  path?: string;
  /** The name to use in the addon creation. Replaces all `__NAME__` instances. */
  name?: string;
  /** Selects the appropriate addon file to import. */
  type: string;
  /** Output verbose messages on internal operations. */
  verbose?: boolean;
}

const path = join(root.path, '..', 'addons');

/**
 * Selects an addon to create.
 */
export function addon(options: IAddonOptions): void {
  const addonPath = join(path, options.addon, options.type);
  const addonData = readFileSync(addonPath, 'utf8');
  const filename = /(?<=\/\/ @xt-filename(\s|=|:)).*$/m.exec(addonData)[0];
  const data = addonData
    .split('\n')
    .slice(1)
    .join('\n');

  mkdirSync(options.path === undefined ? '.' : options.path, {
    recursive: true,
  });

  writeFileSync(
    options.path
      ? join(process.cwd(), options.path, filename)
      : join(process.cwd(), filename),
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
