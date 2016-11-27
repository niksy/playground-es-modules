'use strict';

const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const includePaths = require('rollup-plugin-includepaths').default;
const babel = require('rollup-plugin-babel');
let cache;

rollup.rollup({
	entry: 'input/index.js',
	cache: cache,
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
})
	.then(( bundle ) => {
		const result = bundle.generate({
			format: 'cjs'
		});
		cache = bundle;
		console.log(result.code);
		return bundle;
	}, ( err ) => {
		console.log(err);
	});

