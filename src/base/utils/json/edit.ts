import { infoVerbose } from 'base/utils/console';
import { pkgLocationCwd } from 'base/utils/package';

// tslint:disable-next-line: no-var-requires
const editor = require('edit-json-file');

interface IJsonEditor {
  set(key: string, value: string | boolean | {}): void;
}

export function edit(key: string, data: {}): void {
  infoVerbose(pkgLocationCwd);
  const json: IJsonEditor = editor(pkgLocationCwd, { autosave: true });

  json.set(key, data);
}
