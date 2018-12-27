# X Touch

[![npm downloads](https://img.shields.io/npm/dt/@xploration-tech/xtouch.svg?style=flat-square)](https://www.npmjs.com/package/@xploration-tech/xtouch) [![type support](https://img.shields.io/npm/types/@xploration-tech/xtouch.svg?style=flat-square)](https://www.npmjs.com/package/@xploration-tech/xtouch) [![npm versions](https://img.shields.io/npm/v/@xploration-tech/xtouch.svg?style=flat-square)](<[![](https://img.shields.io/npm/types/@xploration-tech/xtouch.svg?style=flat-square)](https://www.npmjs.com/package/@xploration-tech/xtouch)>) [![issues](https://img.shields.io/github/issues-raw/xploration-technologies/xtouch.svg?style=flat-square)](https://github.com/Xploration-Technologies/xtouch)

[![follow xTech](https://img.shields.io/github/followers/xploration-technologies.svg?label=Follow&style=social)](https://github.com/Xploration-Technologies/xtouch) [![star xTouch](https://img.shields.io/github/stars/xploration-technologies/xtouch.svg?label=Stars&style=social)](https://github.com/Xploration-Technologies/xtouch) [![watch xTouch](https://img.shields.io/github/watchers/Xploration-Technologies/xtouch.svg?label=Watch&style=social)](https://github.com/Xploration-Technologies/xtouch)

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

For example, the following command would create _four_ new, empty files named `tsconfig.json`, `tslint.json`, `index.ts`, and `package.json`.

```bash
xtouch tsconfig.json tslint.json index.ts package.json
```

### Addons _Coming Soon\*_

When used with options, xtouch creates new files and projects based on the parameters given to it. xtouch cannot create more than one type of project simultaneously. However, _should the need arise_, we will add it accordingly.

When creating project files, xtouch needs very few parameters to get you started. For example, the following command would create a _[Fusebox](https://fuse-box.org)_-powered [React](https://reactjs.org) application.

```bash
xtouch --addon fuse-box --type react
```

### Interactive `alpha` _Coming Soon\*_

When specifying the `--interactive` option, you'll be prompted with an interactive CLI for making your selections. This is only something we're playing around with, it may be buggy.

## Note

We're designing xtouch with modularity in mind. This means rather than simply creating a new project entirely, you can use xtouch to add files in a plugin-like way. Another features we're working on is resetting files. This way anything can be removed, reset, or added in a modular way, without you having to scroll through git commits for a good reset entry.
