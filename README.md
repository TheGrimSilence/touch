# xTouch

[![npm downloads](https://img.shields.io/npm/dt/@xploration-tech/xtouch.svg?style=flat-square)](https://www.npmjs.com/package/@xploration-tech/xtouch) [![type support](https://img.shields.io/npm/types/@xploration-tech/xtouch.svg?style=flat-square)](https://www.npmjs.com/package/@xploration-tech/xtouch) [![npm versions](https://img.shields.io/npm/v/@xploration-tech/xtouch.svg?style=flat-square)](<[![](https://img.shields.io/npm/types/@xploration-tech/xtouch.svg?style=flat-square)](https://www.npmjs.com/package/@xploration-tech/xtouch)>) [![issues](https://img.shields.io/github/issues-raw/xploration-technologies/xtouch.svg?style=flat-square)](https://github.com/Xploration-Technologies/xtouch)

[![follow xTech](https://img.shields.io/github/followers/xploration-technologies.svg?label=Follow&style=social)](https://github.com/Xploration-Technologies/xtouch) [![star xTouch](https://img.shields.io/github/stars/xploration-technologies/xtouch.svg?label=Stars&style=social)](https://github.com/Xploration-Technologies/xtouch) [![watch xTouch](https://img.shields.io/github/watchers/Xploration-Technologies/xtouch.svg?label=Watch&style=social)](https://github.com/Xploration-Technologies/xtouch)

> The easiest way to create empty files and folder trees at a glance!

<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#000000 !important;background-color:#FFFFFF !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 17px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#000000 !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/thegrimsilence"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>

## Installation

```bash
> yarn global add @xploration-tech/xtouch
```

## Usage

xTouch is the easiest way to create new, empty files. It is also used to quickly create TypeScript projects and files from templates, based on our own preferences.

xTouch's syntax is

```bash
xtouch [option] file_name(s)
```

When used without any options, xTouch creates new files for any file names that are provided as arguments if files with such names do not already exist. xTouch can create any number of files simultaneously.

For example, the following command would create _four_ new, empty files named `tsconfig.json`, `tslint.json`, `index.ts`, and `package.json`.

```bash
xtouch tsconfig.json tslint.json index.ts package.json
```

As of 2.5.0 you can now add content per file!

```bash
xtouch file1 -c Contents! file2 -c "Multiple words must be in quotations" file3 -c 'More contents!'
```

### Addons

When used with options, xTouch creates new files based on the parameters given to it. xTouch cannot create more than one type of addon simultaneously. However, _should the need arise_, we will add it accordingly.

When creating project files, xTouch needs very few parameters to get you started. For example, the following command would create a _[Fusebox](https://fuse-box.org)_-powered module bundling file! The very same file that powers xTouch's bundles!

```bash
xtouch --addon fuse-box --type module.ts
```

You can also specify a name and path! In this example, xTouch will be replacing `__NAME__` with `83a9999ac29bb5ed086930699e307649`, simply a rather extreme example of a bundle name. xTouch will write the addon file into the `temp/` directory. By default, xTouch will simply write the addon into the CWD (Current Working Directory).

```bash
xtouch -a fuse-box -t module.ts -n 83a9999ac29bb5ed086930699e307649 --path temp
```

```diff
Sparky.task('default', () => {
  ...
-  fuse.bundle('__NAME__').instructions('> xtouch.ts');
+  fuse.bundle('83a9999ac29bb5ed086930699e307649').instructions('> xtouch.ts');
});
```

Addons work by taking a file, renaming it, and putting it under a categoric folder. For example: `addons/<addon>/<type>`. Then we include a configuration file, and we're go for liftoff!

### Interactive `alpha` _Coming Soon\*_

When specifying the `--interactive` option, you'll be prompted with an interactive CLI for making your selections. This is only something we're playing around with, it may be buggy.

## Note

We're designing xTouch with modularity in mind. This means rather than simply creating a new project entirely, you can use xTouch to add files in a plugin-like way. Another features we're working on is resetting files. This way anything can be removed, reset, or added in a modular way, without you having to scroll through git commits for a good reset entry.
