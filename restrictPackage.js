const restrictedImportsConfig = [
  { name: 'uuid', use: 'import { randomUUID } from `node:crypto`.' },
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
