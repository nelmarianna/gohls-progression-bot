/* eslint-disable no-undef */
const { selectify } = require('../helpers/selectify.js');

test('returns correct object and values', () => {

	const testOptions = {
		hello: 'hi',
		bro: 'bye',
		yo: 'yo-yo',
	};
	const expectedOptions = [
		{ label:'hi', value: 'hello' },
		{ label:'bye', value: 'bro' },
		{ label:'yo-yo', value: 'yo' },
	];
	const resultOptions = selectify(testOptions);

	expect(expectedOptions).toEqual(resultOptions);

});

