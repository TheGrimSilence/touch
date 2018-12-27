import chalk from 'chalk';

import Table = require('easy-table');
interface ICommand {
  readonly alias?: string;
  readonly description: string;
  readonly enabled?: boolean;
  readonly experimental?: boolean;
  readonly name: string;
}

export const commands: ICommand[] = [
  {
    name: 'addon',
    alias: 'a',
    description: 'Selects an addon to import.',
    enabled: false,
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
    enabled: false,
  },
  {
    name: 'version',
    description: 'Output the version number.',
    enabled: true,
  },
];

const table = new Table();

// TODO: Clean this shit up!
// ! Create custom table methods
// ! Create custom output methods
/**
 * Return usage information.
 */
export function help(): void {
  console.log('');
  console.log('    Usage: xtouch [command] file_name(s)\n');
  console.log(
    '    You can use xTouch to create empty files, or generate project files!',
  );
  console.log(
    '    In the absence of commands, all arguments are passed as file paths to make.\n',
  );
  console.log('    Commands:' + '\n');
  commands.forEach((command) => {
    table.cell(
      'Enabled',
      chalk`    {${
        command.enabled ? 'blue' : command.experimental ? 'yellow' : 'red'
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
}
