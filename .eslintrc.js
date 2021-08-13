module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 4],
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off',
    'max-len': ['off', {
      code: 100,
      ignoreUrls: true
    }]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ]
      }
    }
  }
};
