const { mergeSpellCheckDictionary } = require('./mergeDictionary');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  plugins: [
    'eslint-plugin-no-null',
    'eslint-plugin-import',
    'eslint-plugin-react',
    'eslint-plugin-prettier',
    '@typescript-eslint',
    'no-only-tests',
    '@typescript-eslint/eslint-plugin',
    'import',
    'security',
    'filenames-simple',
    'spellcheck',
    'more',
    'http-module-timeout',
    'n',
  ],
  rules: {
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'import/no-default-export': 'warn', // need to fix (set as error)
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn', // need to fix (set as error)
    '@typescript-eslint/ban-ts-comment': ['warn'], // need to fix (set as error)
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'off', // DEPRECATED in favor of @typescript-eslint/no-empty-object-type
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off', // DEPRECATED in favor of @typescript-eslint/no-require-imports
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    'brace-style': ['error', '1tbs'],
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: ['off', 'smart'], // need to fix, should be ['error', 'smart']
    'newline-per-chained-call': 'off',
    'no-caller': 'error',
    '@typescript-eslint/ban-types': 'warn', // OUTDATED, https://typescript-eslint.io/rules/ban-types/
    'no-console': ['error'],
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-irregular-whitespace': ['error', { skipJSXText: true }],
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'prefer-object-spread': 'error',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'space-before-function-paren': 'off',
    'no-only-tests/no-only-tests': 'error',
    'security/detect-object-injection': 'off',
    'spellcheck/spell-checker': mergeSpellCheckDictionary(),
    'import/no-extraneous-dependencies': [
      'error',
      { optionalDependencies: false, peerDependencies: false },
    ],
    'more/prefer-includes': 'error',
    'more/no-then': 'error',
    'http-module-timeout/error': 'error',
    'no-sync': 'error',
    'n/prefer-node-protocol': 'error',
  },
};
