# Addon Requirements

> So you want to make an addon?

Making an addon is extremely simple, almost as easy as using xTouch<!-- Shameless plug 🤫 -->! Just make sure you follow this guide, and you'll be ready for launch 🚀

## Addon Layout

A layout is extremely simple, we made sure of that. It's as simple as taking a file, copying it under an addon folder, removing the extension, renaming it to the appropriate addon type, and adding the necessary tags for xTouch to understand what to do!

Let's use the very first ever addon as an example:

```ts
// @xt-filename fuse.ts <-- this tells xTouch what to name the created file
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

## Addon Tags

xTouch looks for tags to know which actions to run. All but one of them is optional, the one being `xt-filename`. Addon Tags are simple to implement, just add `// @xt-<tag> <value>` at the top of the addon file as shown above. We also support `// @xt-<tag>:<value>` and `// @xt-<tag>=<value>` for those who like them.

An Addon Tag **must** be at the top of the file, this is so that it's easier to remove them after the addon is written into the users desired path.

### Required

#### xt-filename

> // @xt-filename fuse.ts

Tells xTouch what to name the addon in the users desired directory.

---

### Script Injection

#### xt-script

> // @xt-script build "yarn clean; ts-node fuse.ts" </br>
> // @xt-script build="yarn clean; ts-node fuse.ts" </br>
> // @xt-script build:"yarn clean; ts-node fuse.ts"

Adds a script into the users `package.json`.

#### xt-script-name

> // @xt-script-name build

_If you're adding multiple scripts to an addon, you **must** use `xt-script`_

#### xt-script-commands

> // @xt-script-command "yarn clean; ts-node fuse.ts"

_If you're adding multiple scripts to an addon, you **must** use `xt-script`_

---

### Dependency Injection

Currently, `xt-optionalDependency` is not supported, as any addon is presumed to strictly require any dependencies requested. You may create an issue if you feel differently, but please provide a good argument.

#### xt-dependency

> // @xt-dependency @types/node@latest

Adds a dependency into the users `package.json`.

#### xt-dependency-name

> // @xt-dependency-name @types/node

_If you're adding multiple dependencies to an addon, you **must** use `xt-dependency`_

#### xt-dependency-version

> // @xt-dependency-version latest

_If you're adding multiple dependencies to an addon, you **must** use `xt-dependency`_

#### xt-devDependency

> // @xt-devDependency @types/node@latest

Adds a dev dependency into the users `package.json`.

#### xt-devDependency-name

> // @xt-devDependency-name @types/node

_If you're adding multiple dependencies to an addon, you **must** use `xt-dependency`_

#### xt-devDependency-version

> // @xt-devDependency-version latest

_If you're adding multiple dependencies to an addon, you **must** use `xt-dependency`_

---

## Addon Rules

### no-mistyped-tags

Check that all tags added are typed correctly, and are supported. The consequence of unsupported or mistyped tags will be their inclusion in the users directory. Don't make your users have to manually erase poorly typed tags.

### no-stray-dependencies

All dependencies requested by an addon must have a usage within the addon. If the dependency is not required, do not add it.

### no-reserved-scripts

Avoid naming a script as a reserved script unless completely intentional, and non-harmful. Note, the user may run `--no-script-injections` to avoid these if they feel it necessary.
