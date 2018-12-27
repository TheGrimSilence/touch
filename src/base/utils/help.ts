import { IParsedArgs } from 'base/parseArgs';
import * as table from 'text-table';

interface ICommand {
  readonly name: string;
  readonly alias?: string;
  readonly description: string;
}

const commands: ICommand[] = [
  {
    name: '--help',
    alias: '-h',
    description: 'Output usage information',
  },
  {
    name: 'interactive',
    alias: 'i',
    description: 'Enables Interactive Mode for project generation',
  },
  {
    name: 'version',
    description: 'Output the version number',
  },
];
export function help(): void {
  const helpTable = table([['testy', 'westy'], ['testy', 'westy']]);
  console.log(commands, helpTable);
}

help();
