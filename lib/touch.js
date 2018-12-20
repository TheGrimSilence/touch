"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const inquirer_1 = require("inquirer");
const path_1 = require("path");
const cwd = process.cwd();
inquirer_1.prompt([
    {
        name: 'template',
        type: 'list',
        message: 'Select a template',
        choices: fs_1.readdirSync(path_1.join(__dirname, '..', 'templates')),
    },
    {
        name: 'name',
        type: 'input',
        message: 'The name of the new project?',
        validate(input) {
            if (/^([A-Za-z\-\_\d])+$/.test(input)) {
                return true;
            }
            else {
                return 'Project name may only include letters, numbers, underscores and hashes.';
            }
        },
    },
]).then((answers) => {
    const projectTemplate = answers['template'];
    const projectName = answers['name'];
    const templatePath = path_1.join(__dirname, '..', 'templates', projectTemplate);
    fs_1.mkdirSync(`${cwd}/${projectName}`);
    mkDirSrc(templatePath, projectName);
});
function mkDirSrc(templatePath, projectName) {
    const fileList = fs_1.readdirSync(templatePath);
    fileList.forEach((file) => {
        const fileOrigin = `${templatePath}/${file}`;
        const fileStats = fs_1.statSync(fileOrigin);
        if (fileStats.isFile()) {
            const contents = fs_1.readFileSync(fileOrigin, 'utf8');
            const writePath = `${cwd}/${projectName}/${file}`;
            fs_1.writeFileSync(writePath, contents, 'utf8');
        }
    });
}
exports.mkDirSrc = mkDirSrc;
