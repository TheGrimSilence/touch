import Chalk from 'chalk';
import { Strategos } from 'strategos'
import { CommandEcho } from 'CommandEch';

console.log(Chalk`{cyan Hello}, touch!`);

new Strategos(process.argv.slice(2), [new CommandEcho()])
