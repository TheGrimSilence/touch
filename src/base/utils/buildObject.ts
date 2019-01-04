import { returnMatches } from 'base/utils/returnMatches';

export function buildObject(data: string, regex: RegExp): {} {
  const keys = returnMatches(data, regex, 1);
  const values = returnMatches(data, regex, 2);
  const result = {};
  keys.forEach((key, i) => (result[key] = values[i]));

  console.log(result);

  return result;
}
