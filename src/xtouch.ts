import { ICommandManager } from 'ICommandManager';
import { CommandManager } from './CommandManager';

console.log('Hello, xTouch!');

export class XTouch {
  public readonly commandManager: ICommandManager;

  public constructor(args: string[]) {
    console.log(args);
    this.commandManager = this.createCommandManager();
    this.getCommandManager().executeCommand(args);
  }

  public getCommandManager(): ICommandManager {
    return this.commandManager;
  }

  public createCommandManager(): CommandManager {
    return new CommandManager(this);
  }
}

new XTouch(process.argv.slice(2));
