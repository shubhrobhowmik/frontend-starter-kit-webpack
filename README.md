# frontend-starter-kit-webpack

Frontend projects starter kit with webpack. This is a simple project for creating a development setup with webpack and also for creating production ready builds.

![demo](https://raw.githubusercontent.com/bchiang7/octoprofile/master/static/og.png)

### Tools used to build this starter-kit

- [Webpack 5](https://webpack.js.org/concepts/)
- [Babel](https://babeljs.io/docs/en/)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

### To run in local

We simply need to do `npm install` and then `npm start`

```shell
$ npm install
$ npm start
```

### Development mode

Hot-reload functionality for any change in - `html` file, `scss` files or `js` files

### Production mode

Creates `dist` folder with separate minified js, css files, optimized images.
Creates separate vendor chunks for prod dependencies such as `lodash`

```shell
$ npm run build
```

### Linting and Formatting code

Used `eslint` along with `prettier` to lint and format the code.
Used `husky` and `lint-staged` to re-format the files that are marked as staged via `git add` before commit.

```shell
$ npx mrm lint-staged
```

### Dev-dependencies

List of dev-dependencies including loaders and plugins used by webpack

```shell
$ npm i webpack webpack-cli webpack-dev-server webpack-merge --save-dev
$ npm i cross-env --save-dev
$ npm i css-loader sass-loader node-sass --save-dev
$ npm i mini-css-extract-plugin --save-dev
$ npm i html-webpack-plugin --save-dev
$ npm i clean-webpack-plugin --save-dev
$ npm i url-loader file-loader --save-dev
$ npm i terser-webpack=plugin css-minimizer-webpack-plugin imagemin-webpack-plugin --save-dev
$ npm i babel-loader @babel/core @babel/preset-env --save-dev
$ npm i @babel/plugin-proposal-class-properties --save-dev
$ npm i eslint babel-eslint --save-dev
$ npm i prettier eslint-config-prettier --save-dev
```
