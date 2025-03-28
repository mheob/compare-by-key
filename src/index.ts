type Direction = 'ASC' | 'DESC';

/**
 * Sorts an array by a specified key, in ascending or descending order.
 *
 * @example
 *   ARRAY.sort(byKey('KEY'))
 * @example
 *   ARRAY.toSorted(byKey('KEY.NESTED_KEY.NESTED_KEY'))
 * @example
 *   ARRAY.toSorted(byKey('KEY', 'desc'))
 * @param key - The key or path to the property to sort by, using dot notation (e.g. "name.first").
 * @param direction - The sort direction, either "ASC" for ascending or "DESC" for descending.
 *                    Defaults to "ASC".
 * @returns A comparison function that can be used to sort an array.
 */
export default function byKey(key: string, direction: Direction = 'ASC') {
	const keys = key.split('.');

	// eslint-disable-next-line ts/no-explicit-any
	return (a: any, b: any) => {
		let index = 0;

		// Access nested property
		while (index < keys.length) {
			a = a[keys[index]];
			b = b[keys[index]];
			index++;
		}

		const variantA = typeof a === 'string' ? a.toUpperCase() : a;
		const variantB = typeof b === 'string' ? b.toUpperCase() : b;

		let comparison = 0;
		if (variantA > variantB) {
			comparison = 1;
		} else if (variantA < variantB) {
			comparison = -1;
		}

		return direction === 'ASC' ? comparison : comparison * -1;
	};
}
