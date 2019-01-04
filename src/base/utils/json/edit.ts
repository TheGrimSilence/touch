import { infoVerbose } from 'base/utils/console';
import { pkgLocation } from 'base/utils/package';

// tslint:disable-next-line: no-var-requires
const editor = require('edit-json-file');

interface IJsonEditor {
  set(key: string, value: string | boolean | {}): void;
}

export function edit(key: string, data: {}): void {
  infoVerbose(pkgLocation);
  const json: IJsonEditor = editor(pkgLocation, { autosave: true });

  json.set(key, data);
}
