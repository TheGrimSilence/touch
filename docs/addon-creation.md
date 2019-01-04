# Addon Creation

> So you want to make an addon?

Making an addon is extremely simple, almost as easy as using xTouch<!-- Shameless plug 🤫 -->! Just make sure you follow this guide, and you'll be ready for launch 🚀

## Addon File

An addon is extremely simple, we made sure of that. It's as simple as taking a file, copying it under an addon folder, removing the extension, renaming it to the appropriate addon type, and adding the necessary configuration file for xTouch to understand what to do!

Let's use the very first ever addon as an example:

```ts
import { FuseBox, Sparky } from 'fuse-box';

Sparky.task('default', () => {
  const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'lib/$name.js',
    target: 'npm@es6',
    plugins: [],
  });

  fuse.bundle('__NAME__').instructions('> index.ts');
  fuse.run();
});
// newline is required
```

## Addon Configuration

xTouch has switched to a configuration system until we can get the old system working correctly. In the same directory as the addon, create a json file with the same name. You can copy the configuration below.

```json
{
  "filename": "tsconfig",
  "defaultPath": "src",
  "scripts": {},
  "dependencies": {},
  "devDependencies": {}
}
```

### filename

Tells xTouch what to name the created addon in the users directory.

### defaultPath (optional)

Where to place the addon.

### scripts

xTouch can add scripts to the users `package.json`. However, if the user specifies `--no-scripts`, they will be ignored.

### dependencies

xTouch can add dependencies to the users `package.json`. However, if the user specifies `--no-dependencies`, they will be ignored.

### devDependencies

xTouch can add devDependencies to the users `package.json`. However, if the user specifies `--no-dependencies`, they will be ignored.