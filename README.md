#### Webpack Scaffold for JavaScript applications

[![package-manager](https://img.shields.io/badge/yarn-000000?style=flat&logo=yarn)](https://yarnpkg.com/)
[![templating](https://img.shields.io/badge/markup-000000?style=flat&logo=html5)](https://dev.w3.org/html5/html-author/)
[![styling](https://img.shields.io/badge/sass-000000?style=flat&logo=sass)](https://sass-lang.com/)
[![javascript](https://img.shields.io/badge/javascript-000000?style=flat&logo=javascript)](https://262.ecma-international.org/5.1/)
[![testing](https://img.shields.io/badge/jest-000000?style=flat&logo=jest)](https://jestjs.io/)
[![build](https://img.shields.io/badge/webpack-000000?style=flat&logo=webpack)](https://webpack.js.org/)
[![linting](https://img.shields.io/badge/eslint-000000?style=flat&logo=eslint)](https://eslint.org/)
[![transpiling](https://img.shields.io/badge/babel-000000?style=flat&logo=babel)](https://eslint.org/)
[![code-formatting](https://img.shields.io/badge/prettier-000000?style=flat&logo=prettier)](https://prettier.io/)
[![powered-by](https://img.shields.io/badge/git-000000?style=flat&logo=git)](https://git-scm.com/)

- Added initial HTML template. Application gets loaded from `src/js/index.js`.

- Added `src/sass/_reset.scss` with **CSS resets** keeping **Accessibility** and **best practices** in mind. Modify your component's CSS in `src/sass/component.scss`.

- Added `nodemon` that helps JavaScript/Node.js applications by automatically restarting the application when files changes are detected.

- Added `prettierrc`, `.babelrc`, `.eslintrc`, and `.eslintignore` config files.

  - **Prettier** for neat code formatting.
  - **Babel** for transpiling our code to backward compatible version of JavaScript.
  - **ESLint** for identifying, reporting, formatting on patterns found on ECMAScript/JavaScript code making our code more consistent and avoiding bugs.

- Added `jest` for unit testing.

- Added `webpack.config` for `dev` and `prod` build. Add the below snippet in your `package.json` file.

```json
"scripts": {
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --open --config webpack.dev.js"
  },
```
