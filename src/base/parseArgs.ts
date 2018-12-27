import * as minimist from 'minimist';

/**
 * The available commands within xTouch.
 */
export interface IParsedArgs {
  [arg: string]: any;
  /** In the absence of commands, all arguments are passed as file paths to make. */
  _: string[];
  /** Returns helpful information about what commands are available. */
  help?: boolean;
  /** Starts the experimental interactive mode. */
  interactive?: boolean;
  /** The name of the new file. */
  name?: string;
  /** Tells the running process to disclose it's process. */
  verbose?: boolean;
  /** Returns the package name and version. */
  version?: boolean;
}

/**
 * The actual commands taken in by minimist.
 */
const options: minimist.Opts = {
  string: ['name'],
  boolean: ['help', 'interactive', 'version', 'verbose'],
  alias: {
    help: 'h',
    interactive: 'i',
    name: 'n',
    verbose: 'v',
  },
  default: {},
};

/**
 * Parses the arguments and hands them to minimist.
 * @param args the active commands or arguments.
 */
export function parseArgs(args: string[]): IParsedArgs {
  return minimist(args, options);
}
