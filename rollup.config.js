const terser = require('rollup-plugin-terser').terser;
const pkg = require('./package.json');

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * (c) ${new Date().getFullYear()} Chart.js Contributors
 * Released under the ${pkg.license} license
 */`;

module.exports = [
	{
		input: 'src/index.js',
		output: {
			name: 'ChartCrosshair',
			file: `dist/${pkg.name}.js`,
			banner: banner,
			format: 'umd',
			indent: false,
			globals: {
				'chart.js': 'Chart',
				'chart.js/helpers': 'Helpers',
			}
		},
		external: [
			'chart.js', 'chart.js/helpers',
		]
	},
	{
		input: 'src/index.js',
		output: {
			name: 'ChartCrosshair',
			file: `dist/${pkg.name}.min.js`,
			format: 'umd',
			indent: false,
			globals: {
				'chart.js': 'Chart',
				'chart.js/helpers': 'Helpers',
			}
		},
		plugins: [
			terser({
				output: {
					preamble: banner
				}
			})
		],
		external: [
			'chart.js', 'chart.js/helpers',
		]
	}
];
