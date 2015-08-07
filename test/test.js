import postcss from 'postcss';
import { expect } from 'chai';

import plugin from '../';

const test = (input, output, opts, done) => {
	postcss([ plugin(opts) ]).process(input).then((result) => {
		expect(result.css).to.eql(output);
		expect(result.warnings()).to.be.empty;
		done();
	}).catch(done);
};

describe('postcss-imperial', () => {
	it('supports dyuim', (done) => {
		test(
			'a{ height: 1dyuim; width: 10дюймов }',
			'a{ height: 1in; width: 10in }',
		{}, done);
	});
	it('поддерживает аршины', (done) => {
		test(
			'a{ letter-spacing: 1аршин; font-size: 240arshinov }',
			'a{ letter-spacing: 28in; font-size: 6720in }',
		{}, done);
	});
});
