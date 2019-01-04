import chalk from 'chalk';

export function error(msg, ...rest): void {
  return console.error(chalk`[{red error}]`, msg, rest);
}

export function info(msg, ...rest): void {
  return console.info(chalk`[{blue info}]`, msg, rest);
}

export function warn(msg, ...rest): void {
  return console.warn(chalk`[{red warn}]`, msg, rest);
}
