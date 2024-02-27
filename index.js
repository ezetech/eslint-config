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
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'prettier/prettier': 'error',
    'operator-linebreak': ['error', 'after'],
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
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
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
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/semi': ['off', null],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': 'off',
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: ['off', 'smart'],
    'id-blacklist': 'off',
    'id-match': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-caller': 'error',
    '@typescript-eslint/ban-types': 'warn',
    'no-console': ['error'],
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-null/no-null': 'off',
    'no-redeclare': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-var': 'error',
    'prefer-object-spread': 'error',
    curly: 'error',
    'quote-props': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
    'space-before-function-paren': 'off',
    'no-only-tests/no-only-tests': 'error',
    'space-in-parens': ['off', 'never'],
    'security/detect-object-injection': 'off',
    'spellcheck/spell-checker': mergeSpellCheckDictionary(),
    'import/no-extraneous-dependencies': [
      'error',
      { optionalDependencies: false, peerDependencies: false },
    ],
    'more/prefer-includes': 'error',
    'more/no-then': 'error',
    'http-module-timeout/error': 'error',
  },
};
