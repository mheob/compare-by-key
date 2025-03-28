import { describe, expect, it } from 'vitest';

import byKey from '.';

describe('single-level key', () => {
	// Arrange
	const array = [
		{ id: 3, name: 'Alice' },
		{ id: 1, name: 'Bob' },
		{ id: 2, name: 'Charlie' },
	];

	it('should sort objects ascending order', () => {
		// Act
		const sortedArray = array.toSorted(byKey('id'));

		// Assert
		expect(sortedArray).toEqual([
			{ id: 1, name: 'Bob' },
			{ id: 2, name: 'Charlie' },
			{ id: 3, name: 'Alice' },
		]);
	});

	it('should sort objects descending order', () => {
		// Act
		const sortedArray = array.toSorted(byKey('id', 'DESC'));

		// Assert
		expect(sortedArray).toEqual([
			{ id: 3, name: 'Alice' },
			{ id: 2, name: 'Charlie' },
			{ id: 1, name: 'Bob' },
		]);
	});
});

describe('nested key', () => {
	// Arrange
	const array = [
		{ id: 3, name: { first: 'Alice', last: 'Johnson' } },
		{ id: 1, name: { first: 'Bob', last: 'Smith' } },
		{ id: 2, name: { first: 'Charlie', last: 'Brown' } },
	];

	it('should sort objects ascending order', () => {
		// Act
		const sortedArray = array.toSorted(byKey('name.last'));

		// Assert
		expect(sortedArray).toEqual([
			{ id: 2, name: { first: 'Charlie', last: 'Brown' } },
			{ id: 3, name: { first: 'Alice', last: 'Johnson' } },
			{ id: 1, name: { first: 'Bob', last: 'Smith' } },
		]);
	});

	it('should sort objects descending order', () => {
		// Act
		const sortedArray = array.toSorted(byKey('name.last', 'DESC'));

		// Assert
		expect(sortedArray).toEqual([
			{ id: 1, name: { first: 'Bob', last: 'Smith' } },
			{ id: 3, name: { first: 'Alice', last: 'Johnson' } },
			{ id: 2, name: { first: 'Charlie', last: 'Brown' } },
		]);
	});
});
