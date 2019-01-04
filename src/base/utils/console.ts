import chalk from 'chalk';

/** Returns a red verbose-locked message. */
export function errorVerbose(msg: string): void {
  if (verbose) {
    return console.error(chalk`[{red error}]`, msg);
  } else {
    return;
  }
}

/** Returns a blue verbose-locked message. */
export function infoVerbose(msg: string | string[] | {}): void {
  if (verbose) {
    return console.info(chalk`[{blue info}]`, msg);
  } else {
    return;
  }
}

/** Returns a yellow verbose-locked message. */
export function warnVerbose(msg: string): void {
  if (verbose) {
    return console.warn(chalk`[{yellow warn}]`, msg);
  } else {
    return;
  }
}

/** Returns a red message. */
export function error(msg: string): void {
  if (verbose) {
    return console.error(chalk`[{red error}]`, msg);
  } else {
    return;
  }
}

/** Returns a blue message. */
export function info(msg: string | string[] | {}): void {
  if (verbose) {
    return console.info(chalk`[{blue info}]`, msg);
  } else {
    return;
  }
}

/** Returns a yellow message. */
export function warn(msg: string): void {
  if (verbose) {
    return console.warn(chalk`[{yellow warn}]`, msg);
  } else {
    return;
  }
}
