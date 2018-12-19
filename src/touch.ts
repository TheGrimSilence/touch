import { readdirSync } from 'fs';
import { prompt } from 'inquirer';
// ! const args = process.argv.slice(2);

// ! const grab = (flag: string) => {
// !   const index = process.argv.indexOf(flag);

// !   return index === -1 ? null : process.argv[index + 1];
// ! };

prompt([
  {
    name: 'template',
    type: 'list',
    message: 'Select a template',
    choices: readdirSync(`${__dirname}/templates`),
  },
  {
    name: 'name',
    type: 'input',
    message: 'The name of the new project?',
    validate(input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) {
        return true;
      } else {
        return 'Project name may only include letters, numbers, underscores and hashes.';
      }
    },
  },
]).then((answers) => {
  console.log(answers);
});
