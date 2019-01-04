import * as minimist from 'minimist';

/**
 * The available commands within xTouch.
 */
export interface IParsedArgs {
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
  /** The name to use in the addon creation. Replaces all `__NAME__` instances. *Only works where supported.* */
  name?: string;
  /** Should we add dependencies to the users package.json? */
  noDependencies?: boolean;
  /** Should we add scripts to the users package.json? */
  noScripts?: boolean;
  /** The to write the contents to. *Only works where supported.* */
  path?: string;
  /** Selects a project to import. */
  project?: string;
  /** Deactivates various features for live testing instead of unit testing. */
  testMode?: boolean;
  /** Selects the appropriate addon file or project to import. */
  type?: string;
  /** Output verbose messages on internal operations. */
  verbose?: boolean;
  /** Returns the package name and version. */
  version?: boolean;
}

/**
 * The actual commands taken in by minimist.
 */
const options: minimist.Opts = {
  string: ['addon', 'content', 'name', 'path', 'project', 'type'],
  boolean: [
    'help',
    'interactive',
    'no-dependencies',
    'no-scripts',
    'test-mode',
    'verbose',
    'version',
  ],
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
