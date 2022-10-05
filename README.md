# eslint-config

Sharable eslint config

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
- Update the version in package.json and package-lock.json files. Version `MUST` be greater than the previous one.
Commit and push changes.

- Add a tag with a new version.
```
git tag <new_version>
git push origin <new_version>
```

- Publish a package
```
npm publish --access public
```

Note: `npm publish` require authorization. For NPM access ask PM.
