import {
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'fs';
import { prompt } from 'inquirer';
import { join } from 'path';

const cwd = process.cwd();

prompt([
  {
    name: 'template',
    type: 'list',
    message: 'Select a template',
    choices: readdirSync(join(__dirname, '..', 'templates')),
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
  const projectTemplate = answers['template'];
  const projectName = answers['name'];
  const templatePath = join(__dirname, '..', 'templates', projectTemplate);

  mkdirSync(`${cwd}/${projectName}`);
  mkDirSrc(templatePath, projectName);
});

export function mkDirSrc(
  templatePath: import('fs').PathLike,
  projectName: string,
) {
  const fileList = readdirSync(templatePath);

  fileList.forEach((file) => {
    const fileOrigin = `${templatePath}/${file}`;
    const fileStats = statSync(fileOrigin);

    if (fileStats.isFile()) {
      const contents = readFileSync(fileOrigin, 'utf8');
      const writePath = `${cwd}/${projectName}/${file}`;

      writeFileSync(writePath, contents, 'utf8');
    }
  });
}
