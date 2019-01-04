import chalk from 'chalk';

import Table = require('easy-table');

interface ICommand {
  readonly alias?: string;
  readonly description: string;
  readonly enabled?: boolean;
  readonly experimental?: boolean;
  readonly name: string;
}

/** The chosen color for enabled commands. */
const enabled = 'blue';
/** The chosen color for experimental commands. */
const experimental = 'yellow';
/** The chosen color for disabled commands. */
const disabled = 'red';

export const commands: ICommand[] = [
  {
    name: 'addon',
    alias: 'a',
    description: 'Selects an addon to import.',
    enabled: true,
  },
  {
    name: 'content',
    alias: 'c',
    description: 'The content to be written into the file..',
    enabled: true,
  },
  {
    name: 'help',
    alias: 'h',
    description: 'Output usage information.',
    enabled: true,
  },
  {
    name: 'interactive',
    alias: 'i',
    description: 'Enables Interactive Mode for project generation.',
    enabled: false,
    experimental: true,
  },
  {
    name: 'project',
    alias: 't',
    description: 'Selects a project to import.',
    enabled: false,
  },
  {
    name: 'type',
    alias: 't',
    description: 'Selects the appropriate addon file to import.',
    enabled: true,
  },
  {
    name: 'version',
    description: 'Output the version number.',
    enabled: true,
  },
];

const table = new Table();

/**
 * Return usage information.
 */
export function help(): void {
  console.log(`
    Usage: xtouch [command] file_name(s)

    You can use xTouch to create empty files, or generate project files!
    In the absence of commands, all arguments are passed as file paths to make.

    Commands:
  `);

  commands.forEach((command) => {
    table.cell(
      'Enabled',
      chalk`    {${
        command.enabled
          ? enabled
          : command.experimental
          ? experimental
          : disabled
      } •}`,
    );

    if (command.alias) {
      table.cell('Command', `${command.name}, ${command.alias}`);
    } else {
      table.cell('Command', `${command.name}`);
    }

    table.cell('Spacer', '   ');
    table.cell('Description', `    ${command.description}`);
    table.newRow();
  });

  console.log(table.print());
  console.log(
    chalk`
    The indicators on the left show the status of each command.
    They indicate the following:

    ({${enabled} •}  Active) ({${experimental} •}  Experimental) ({${disabled} •}  Unfinished)
    `,
  );
}
