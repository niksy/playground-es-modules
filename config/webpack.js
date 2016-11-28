'use strict';

const config = require('webpack-config-niksy');
const nodeResolve = require('rollup-plugin-node-resolve');
const includePaths = require('rollup-plugin-includepaths').default;
const babel = require('rollup-plugin-babel');

module.exports = Object.assign({}, config({
	entry: {
		webpack: './input/index.js'
	},
	output: {
		path: 'output',
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: '@timothygu/rollup-loader',
				include: require.resolve('../input')
			}
		]
	}
}), {
	rollup: {
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
