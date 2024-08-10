module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  'env': {
    'browser': true,
    'es2021': true
  },
  'parserOptions': {
    'ecmaVersion': 2021,
    'sourceType': 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'space-before-function-paren': ['error', 'always'],
    'indent': ['error', 2],
    'object-curly-newline': ['error', { 'consistent': true }],
    'no-unused-vars': ['warn'],
    'eqeqeq': ['error', 'always'],
    'no-console': ['off'],
    'prefer-arrow-callback': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-template': ['error'],
    'no-trailing-spaces': ['error'],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}