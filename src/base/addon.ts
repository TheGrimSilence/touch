import * as root from 'app-root-path';
import { join } from 'path';

interface IAddonOptions {
  /** Selects an addon to import. */
  addon: string;
  /** The name to use in the addon creation */
  name: string;
  /** Selects the appropriate addon file to import. */
  type: string;
}

export const templatePath = join(root.path, 'templates');

/**
 * Selects an addon to import.
 * @usage `xtouch -a fuse-box -t module`
 * @param options
 */
export function addon(options: IAddonOptions): void {}
