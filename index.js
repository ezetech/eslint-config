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
  ],
  rules: {
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }], // +
    'prettier/prettier': 'error', // REDUNDANT, it is already error in eslint-plugin-prettier
    'operator-linebreak': ['error', 'after'], // +
    '@typescript-eslint/no-shadow': ['error'], // +, also, need to set "no-shadow": "off" according to docs
    '@typescript-eslint/no-unused-vars': [
      // +
      'error',
      {
        args: 'none', // probably, should be "after-used"
        ignoreRestSiblings: true,
      },
    ],
    'import/order': [
      // +
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
    '@typescript-eslint/ban-ts-ignore': ['off'], // should be removed as it was replaced with ban-ts-comment (from 3.0.0)
    '@typescript-eslint/ban-ts-comment': ['off'], // probably, should be warn
    '@typescript-eslint/dot-notation': ['error'], // +, also, need to set "dot-notation": "off" according to docs
    '@typescript-eslint/explicit-member-accessibility': [
      // +
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      // should be removed because of it is managed by eslint-plugin-prettier
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'off', // order interface and class fields, could be useful
    '@typescript-eslint/naming-convention': 'off', // probably, useful, but hard to implement
    '@typescript-eslint/no-empty-function': 'error', // +
    '@typescript-eslint/no-empty-interface': 'off', // probably, should be "error", DEPRECATED in favor of @typescript-eslint/no-empty-object-type
    '@typescript-eslint/no-inferrable-types': [
      // +
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-namespace': 'off', // should be warn
    '@typescript-eslint/no-unused-expressions': [
      // +
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off', // +, DEPRECATED in favor of @typescript-eslint/no-require-imports
    '@typescript-eslint/prefer-namespace-keyword': 'error', // +
    '@typescript-eslint/quotes': [
      // should be removed because of it is managed by eslint-plugin-prettier
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/semi': ['off', null], // should be removed because of it is managed by eslint-plugin-prettier
    '@typescript-eslint/type-annotation-spacing': 'error', // should be removed because of it is managed by eslint-plugin-prettier
    'arrow-parens': ['off', 'always'], // should be removed because of it is managed by eslint-plugin-prettier
    'brace-style': ['error', '1tbs'], // +
    'comma-dangle': 'off', // should be removed because of it is managed by eslint-plugin-prettier
    'default-case': 'error', // +
    'eol-last': 'error', // +
    eqeqeq: ['off', 'smart'], // "off" option disables this rule, so "smart" is pointless, probably, it should be ['error', 'smart']
    'id-blacklist': 'off', // +, DEPRECATED in favor of id-denylist
    'id-match': 'off', // +, match identifier names to some reg exp. Not needed. Similar to @typescript-eslint/naming-convention
    'linebreak-style': 'off', // should be removed because of it is managed by eslint-plugin-prettier
    'max-len': 'off', // should be removed because of it is managed by eslint-plugin-prettier
    'new-parens': 'off', // should be removed because of it is managed by eslint-plugin-prettier
    'newline-per-chained-call': 'off', // +, not managed by eslint-plugin-prettier
    'no-caller': 'error', // +
    '@typescript-eslint/ban-types': 'warn', // OUTDATED, https://typescript-eslint.io/rules/ban-types/
    'no-console': ['error'], // +
    'no-empty': 'error', // +
    'no-eval': 'error', // +
    'no-extra-semi': 'off', // should be removed because of it is managed by eslint-plugin-prettier
    'no-fallthrough': 'error', // +
    'no-irregular-whitespace': 'off', // should be removed because of it is managed by eslint-plugin-prettier
    'no-multiple-empty-lines': 'error', // should be removed because of it is managed by eslint-plugin-prettier
    'no-new-wrappers': 'error', // +
    'no-null/no-null': 'off', // +, if it is "off", maybe eslint-plugin-no-null should be completly removed ?
    'no-redeclare': 'error', // +
    'no-trailing-spaces': 'error', // should be removed because of it is managed by eslint-plugin-prettier
    'no-undef-init': 'off', // +
    'no-underscore-dangle': 'off', // probably, should be error to have consistent code base, but debatable (at least 3 errors found)
    'no-var': 'error', // +
    'prefer-object-spread': 'error', // +
    curly: 'error', // should be removed because of it is managed by eslint-plugin-prettier
    'quote-props': 'off', // DEPRECATED, managed by eslint-plugin-prettier
    'react/jsx-curly-spacing': 'off', // +
    'react/jsx-equals-spacing': 'off', // +
    'react/jsx-wrap-multilines': 'off', // +
    'space-before-function-paren': 'off', // +
    'no-only-tests/no-only-tests': 'error', // +
    'space-in-parens': ['off', 'never'], // should be removed because of it is managed by eslint-plugin-prettier
    'security/detect-object-injection': 'off', // probably should be error, but there are a lot of errors (at least 2000 errors found)
    'spellcheck/spell-checker': mergeSpellCheckDictionary(), // +
    'import/no-extraneous-dependencies': [
      // +
      'error',
      { optionalDependencies: false, peerDependencies: false },
    ],
    'more/prefer-includes': 'error', // +
    'more/no-then': 'error', // +
    'http-module-timeout/error': 'error', // +
  },
};
