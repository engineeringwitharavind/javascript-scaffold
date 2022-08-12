#### Webpack Scaffold for JavaScript applications

Nowadays, most companies ask Frontend Engineers to use HTML, CSS, and Vanilla JavaScript for Frontend Machine coding rounds. This boilerplate is just for that. Customize it to fit your needs.

[![package-manager](https://img.shields.io/badge/yarn-000000?style=flat&logo=yarn)](https://yarnpkg.com/)
[![templating](https://img.shields.io/badge/markup-000000?style=flat&logo=html5)](https://dev.w3.org/html5/html-author/)
[![styling](https://img.shields.io/badge/css-000000?style=flat&logo=css3)](https://www.w3.org/Style/CSS/specs.en.html)
[![javascript](https://img.shields.io/badge/javascript-000000?style=flat&logo=javascript)](https://262.ecma-international.org/5.1/)
[![build](https://img.shields.io/badge/webpack-000000?style=flat&logo=webpack)](https://webpack.js.org/)
[![linting](https://img.shields.io/badge/eslint-000000?style=flat&logo=eslint)](https://eslint.org/)
[![transpiling](https://img.shields.io/badge/babel-000000?style=flat&logo=babel)](https://eslint.org/)
[![code-formatting](https://img.shields.io/badge/prettier-000000?style=flat&logo=prettier)](https://prettier.io/)
[![powered-by](https://img.shields.io/badge/git-000000?style=flat&logo=git)](https://git-scm.com/)

- Added initial HTML template. Application gets loaded from `src/index.js`.

- Added `src/styles/_reset.css` with [Josh's custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/) keeping **Accessibility** and **best practices** in place. Modify your application's CSS in `src/styles/main.css`.

- Added Prettier, Babel, and ESLint configs.

  - **Prettier** for neat code formatting.
  - **Babel** for transpiling our code to backward compatible version of JavaScript.
  - **ESLint** for identifying, reporting, formatting on patterns found on ECMAScript/JavaScript code making our code more consistent and avoiding bugs.

- Added Webpack config for `dev` and `prod` build. Add the below snippet in your `package.json` file.

```json
"scripts": {
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --open --config webpack.dev.js"
  },
```
