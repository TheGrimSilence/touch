import chalk from 'chalk';

export function error(msg: string): void {
  return console.error(chalk`[{red error}] ${msg}`);
}

export function info(msg: string): void {
  return console.info(chalk`[{blue info}] ${msg}`);
}

export function warn(msg: string): void {
  return console.warn(chalk`[{red warn}] ${msg}`);
}
