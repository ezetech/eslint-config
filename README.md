# eslint-config

Sharable eslint config

## development

```ts
  npm install
```

Install the correct versions of each package, which are listed by the command:

```
npm info "@ezetech/eslint-config@latest" peerDependencies
```

More info: [ESLint sharable configuration](https://eslint.org/docs/developer-guide/shareable-configs)

<b>To publish NPM package:</b>

- Make sure you have empty working status and the working directory is clean

```
git status --porcelain
```

- Pull the latest changes

```
git checkout main
git pull origin main
```

- Update the version in package.json and package-lock.json files with next commands.
  For major version (^.0.0) use next command

```
npm version ---no-commit-hooks major
```

For minor version (0.^.0) use next command

```
npm version --no-commit-hooks minor
```

For patch version (0.0.^) use next command

```
npm version --no-commit-hooks patch
```

Commit and push changes.

- Push new tag version.

```
git push origin <new_version>
```

- Publish a public package

```
npm publish --access public
```

Note: `npm publish` require authorization. For NPM access ask PM.

- Publish a private package

```
npm publish --access restricted --@ezetech:registry=https://npm.pkg.github.com
```

Note: `npm publish` require Github token.

**NOTICE: you NEED to publish both versions: public and private**
