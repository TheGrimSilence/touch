import chalk from 'chalk';

export function error(msg): void {
  return console.error(chalk`[{red error}]`, msg);
}

export function info(msg): void {
  return console.info(chalk`[{blue info}]`, msg);
}

export function warn(msg): void {
  return console.warn(chalk`[{red warn}]`, msg);
}
