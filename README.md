# Comparison function to sort objects in an array by key

## Install

```bash
pnpm install compare-by-key
```

## Usage

```ts
import compareByKey from 'compare-by-key';

const array = [
	{ id: 3, name: { first: 'Alice', last: 'Johnson' } },
	{ id: 1, name: { first: 'Bob', last: 'Smith' } },
	{ id: 2, name: { first: 'Charlie', last: 'Brown' } },
];

const resultId = array.toSorted(compareByKey('id'));
// resultId = [
//   { id: 1, name: { first: 'Bob', last: 'Smith' } },
//   { id: 2, name: { first: 'Charlie', last: 'Brown' } },
//   { id: 3, name: { first: 'Alice', last: 'Johnson' } },
// ]

const resultFirstName = array.toSorted(compareByKey('name.first'));
// resultFirstName = [
//   { id: 3, name: { first: 'Alice', last: 'Johnson' } },
//   { id: 1, name: { first: 'Bob', last: 'Smith' } },
//   { id: 2, name: { first: 'Charlie', last: 'Brown' } },
// ]

const resultLastNameDesc = array.toSorted(compareByKey('name.last', 'DESC'));
// resultLastNameDesc = [
//   { id: 1, name: { first: 'Bob', last: 'Smith' } },
//   { id: 3, name: { first: 'Alice', last: 'Johnson' } },
//   { id: 2, name: { first: 'Charlie', last: 'Brown' } },
// ]
```
