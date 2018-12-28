import * as minimist from 'minimist';

/**
 * The available commands within xTouch.
 */
export interface IParsedArgs {
  [arg: string]: any;
  /** In the absence of commands, all arguments are passed as file paths to make. */
  _: string[];
  /** Selects an addon to import. */
  addon?: string;
  /** The content to be written into the file. */
  content?: string | string[];
  /** Returns helpful information about what commands are available. */
  help?: boolean;
  /** Starts the experimental interactive mode. */
  interactive?: boolean;
  /** The name to use in the addon creation */
  name?: string;
  /** Selects a project to import. */
  project?: string;
  /** Selects the appropriate addon file to import. */
  type?: string;
  /** Tells the running process to disclose it's process. */
  verbose?: boolean;
  /** Returns the package name and version. */
  version?: boolean;
}

/**
 * The actual commands taken in by minimist.
 */
const options: minimist.Opts = {
  string: ['addon', 'content', 'name', 'project', 'type'],
  boolean: ['help', 'interactive', 'verbose', 'version'],
  alias: {
    addon: 'a',
    content: 'c',
    help: 'h',
    interactive: 'i',
    name: 'n',
    project: 'p',
    type: 't',
    verbose: 'v',
  },
};

/**
 * Parses the arguments and hands them to minimist.
 * @param args the active commands or arguments.
 */
export function parseArgs(args: string[]): IParsedArgs {
  return minimist(args, options);
}
