import 'array.prototype.find';

import postcss from 'postcss';
import units from 'russian-length-units';

const INCHES_IN_METER = 0.0254;
const ROUNDING_MAGIC_NUMBER = 1e6;

function translate(value, amount, name) {
	const convert = units.find((unit) => {
		return ~unit.names.indexOf(name.toLowerCase());
	}, name);
	const result = convert.value * parseFloat(amount) / INCHES_IN_METER;
	return (result * ROUNDING_MAGIC_NUMBER).toFixed() / ROUNDING_MAGIC_NUMBER + 'in';
}

module.exports = postcss.plugin('postcss-russian-units', () => {
	return (css) => {
		units.forEach((unit) => {
			unit.names.forEach((name) => {
				const pattern = new RegExp('^(\\d+\\.?\\d*)(' + name + ')$', 'i');
				css.replaceValues(pattern, { fast: name }, translate);
			});
		});
	};
});
