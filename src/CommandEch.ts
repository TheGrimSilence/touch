import { CommandBase, ICommand } from 'strategos'
export class CommandEcho extends CommandBase implements ICommand {
  public getName() {
    return "echo"
  }

  public getAliases() {
    return ["e"]
  }

  public getUsage() {
    return "echo <your)string>"
  }

  public execute(args: string[]) {
    console.log(args[0], "it works!");

  }
}
