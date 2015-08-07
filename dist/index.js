'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('array.prototype.find');

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _russianLengthUnits = require('russian-length-units');

var _russianLengthUnits2 = _interopRequireDefault(_russianLengthUnits);

var INCHES_IN_METER = 0.0254;
var ROUNDING_MAGIC_NUMBER = 1e6;

function translate(value, amount, name) {
	var convert = _russianLengthUnits2['default'].find(function (unit) {
		return ~unit.names.indexOf(name.toLowerCase());
	}, name);
	var result = convert.value * parseFloat(amount) / INCHES_IN_METER;
	return (result * ROUNDING_MAGIC_NUMBER).toFixed() / ROUNDING_MAGIC_NUMBER + 'in';
}

module.exports = _postcss2['default'].plugin('postcss-russian-units', function () {
	return function (css) {
		_russianLengthUnits2['default'].forEach(function (unit) {
			unit.names.forEach(function (name) {
				var pattern = new RegExp('^(\\d+\\.?\\d*)(' + name + ')$', 'i');
				css.replaceValues(pattern, { fast: name }, translate);
			});
		});
	};
});