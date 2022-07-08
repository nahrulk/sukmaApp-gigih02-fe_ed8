module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended',
  'plugin:react/recommended', 'prettier/recommended'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }], 
  },
}
