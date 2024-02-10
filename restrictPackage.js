const restrictedImportsConfig = [
  {
    name: 'uuid',
    use: 'Please use import { randomUUID } from `node:crypto` instead of the `uuid` package.',
  },
];

// export all rules
module.exports = {
  restrictedImportsConfig,
  allRestrictedImports: restrictedImportsConfig.map((config) => {
    return {
      name: config.name,
      use: config.use,
    };
  }),
};
