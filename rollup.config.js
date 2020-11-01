import babel from '@rollup/plugin-babel';

const config = {
	input: 'src/main.js',
	output: {
		dir: 'output',
		format: 'esm'
	},
	plugins: [babel({
		babelHelpers: 'bundled',
		exclude: 'node_modules/**'
	})]
	// intro: " (function(window, document, exportName, undefined) { \n'use strict';",
 	// outro: "})(window, document, 'Hammer');"
};

export default config;