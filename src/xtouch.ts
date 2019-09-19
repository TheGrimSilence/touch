import { ICommandManager } from 'ICommandManager';
import { XTouchCommandManager } from 'XTouchCommandManager';
import Chalk from 'chalk';

console.log(Chalk`{cyan Hello}, xTouch!`);

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

  public createCommandManager(): XTouchCommandManager {
    return new XTouchCommandManager(this);
  }
}

new XTouch(process.argv.slice(2));
