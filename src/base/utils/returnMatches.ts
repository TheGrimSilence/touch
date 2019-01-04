export function returnMatches(string, regex, index) {
  const matches = [];
  let match;

  while ((match = regex.exec(string))) {
    matches.push(match[index]);
  }

  return matches;
}
