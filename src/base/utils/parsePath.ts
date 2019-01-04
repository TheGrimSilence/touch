import { dirname, normalize, parse } from 'path';

/**
 * An object defining basic information about a file and it's location.
 */
interface IBasicPathInfo {
  readonly base: string;
  readonly extension: string;
  readonly name: string;
  readonly path: string;
  readonly root: string;
}

/**
 * Returns basic information about a file and it's location.
 * @param file
 */
export function parsePath(file: string): IBasicPathInfo {
  /** Returns a valid path */
  const normalized = normalize(file);
  const path = dirname(normalized);
  /**
   * The object returned from the path
   * ```ts
   * {
   *  root: '/',
   *  dir: '/home/user/dir',
   *  base: 'file.txt',
   *  ext: '.txt',
   *  name: 'file',
   * }
   * ```
   */
  const info = parse(normalized);

  const ext = info.ext.split('.')[1];

  return {
    base: info.base,
    extension: ext,
    name: info.name,
    path,
    root: info.root,
  };
}
