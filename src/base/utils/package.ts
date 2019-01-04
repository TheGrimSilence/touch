import * as root from 'app-root-path';
import { readFileSync } from 'fs';
import { join } from 'path';

interface IPackage {
  readonly name: string;
  readonly version: string;
  readonly company: string;
  readonly description: string;
  readonly author: string;
  readonly scripts: { [args: string]: any };
  readonly dependencies: { [args: string]: any };
  readonly devDependencies: { [args: string]: any };
}

export const pkgLocation = join(root.path, '..', 'package.json');
const json = readFileSync(pkgLocation, 'utf8');
export const pkg: IPackage = JSON.parse(json);
