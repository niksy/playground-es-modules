# playground-es-modules

Solutions for ES modules.

## Introduction

[ES modules](http://exploringjs.com/es6/ch_modules.html) are emerging modules standard for JavaScript.

Unfortunately, they’re still not natively supported inside any available Node version.

What we want is proper ES modules in Node and browsers without the baggage of CommonJS `require`. Read [article on small modules](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/) to see the impact this can have in browser environment.

Currently, [rollup](http://rollupjs.org/) is the most flexible solution for that, but it lacks features necessary for larger web apps which [Browserify](http://browserify.org/) and [Webpack](https://webpack.js.org/) already provide. There is [an open issue for Webpack](https://github.com/webpack/webpack/issues/2873) which aims to address lack of this feature in the core, but in the meantime we are left with 3rd-party solutions.

The idea is to leverage Rollup capabilities with [Browserify transform](https://github.com/nolanlawson/rollupify/) or [Webpack loader](https://github.com/TimothyGu/rollup-loader), but specifically only for modules defined as `module` and `jsnext:main` in package.json and local modules. We don’t want to handle anything that isn’t ES module; that should be left to either Browserify or Webpack build system.

## Usage

```sh
git clone git@github.com:niksy/playground-es-modules.git
npm install
```

### Node

```sh
npm test
```

### Browserify

```sh
npm run test:browserify
```

### Webpack

```sh
npm run test:webpack
```

## References

* http://stackoverflow.com/a/36427601/178058
* https://github.com/rollup/rollup/issues/45#issuecomment-168127982
* https://github.com/rollup/rollup/issues/45#issuecomment-210078851

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
