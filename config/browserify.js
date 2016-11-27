'use strict';

const fs = require('fs');
const nodeResolve = require('rollup-plugin-node-resolve');
const includePaths = require('rollup-plugin-includepaths').default;
const babel = require('rollup-plugin-babel');
const browserify = require('browserify');
const rollupify = require('rollupify');

const b = browserify();
b.add('./input/index.js');
b.transform(rollupify, {
	config: {
		plugins: [
			babel({
				babelrc: false,
				plugins: [
					'lodash'
				]
			}),
			includePaths({
				paths: [
					'input/local_modules'
				]
			}),
			nodeResolve({
				module: true,
				jsnext: true,
				main: false,
				browser: false
			})
		]
	}
});
b.bundle().pipe(fs.createWriteStream('./output/browserify.js'));

