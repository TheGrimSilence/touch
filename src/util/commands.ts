interface Command {
  readonly name: string;
  readonly alias?: string;
  readonly description: string;
}

const commands: Command[] = [
  {
    name: '*',
    description: 'You can throw anything in here but requires a handler.',
  },
];

// TODO setup handlers for command actions
// TODO Validate `commands.json` file.