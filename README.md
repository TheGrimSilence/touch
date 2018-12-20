# X Touch

> The easiest way to create empty files, and typescript projects!

## Installation

```bash
> yarn global add @xploration-tech/xtouch
```

## Usage

xtouch is the easiest way to create new, empty files. It is also used to quickly create TypeScript projects and files from templates, based on our own preferences.

xtouch's syntax is

```bash
xtouch [option] file_name(s)
```
When used without any options, xtouch creates new files for any file names that are provided as arguments if files with such names do not already exist. xtouch can create any number of files simultaneously.

For example, the following command would create *four* new, empty files named `tsconfig.json`, `tslint.json`, `index.ts`, and `package.json`.

```bash
xtouch tsconfig.json tslint.json index.ts package.json
```

When used with options, xtouch creates new files and projects based on the parameters given to it. xtouch cannot create more than one type of project simultaneously. However, *should the need arise*, we will add it accordingly.

When creating project files, xtouch needs very few parameters to get you started. For example, the following command would create a *[Fusebox](https://fuse-box.org)*-powered [React](https://reactjs.org) application.

```bash
xtouch --addon fuse-box --type react
```

We're designing xtouch with modularity in mind. This means rather than simply creating a new project entirely, you can use xtouch to add files in a plugin-like way. Another features we're working on is resetting files. This way anything can be removed, reset, or added in a modular way, without you having to scroll through git commits for a good reset entry.