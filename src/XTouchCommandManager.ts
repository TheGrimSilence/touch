import { CommandHandler } from 'CommandHandler';
import { CommandEcho } from 'CommandEcho';
import { CommandHelp } from 'CommandHelp';
import { XTouch } from 'xtouch';

export class XTouchCommandManager extends CommandHandler {
  private readonly xTouch: XTouch;
  public constructor(xTouch: XTouch) {
    super();
    this.xTouch = xTouch;
    this.registerCommand(new CommandEcho());
    this.registerCommand(new CommandHelp());
    this.getCommands();
  }

  protected getXTouch(): XTouch {
    return this.xTouch;
  }
}
