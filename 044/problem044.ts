// Pentagon numbers - Problem 044
// https://projecteuler.net/problem=44

/*
Pentagonal numbers are generated by the formula, Pn=n(3nā1)/2. The first ten pentagonal numbers are:

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 ā 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk ā Pj| is minimised; what is the value of D?
*/

export function getPentagonal(index: number): number {
	return (index * (3 * index - 1)) / 2;
}

export function isPentagonal(n: number): boolean {
	const root = Math.sqrt(1 + 24 * n);
	return root % 6 === 5;
}

let result: number = null;

for (let i = 2; true; i++) {
	let numA = getPentagonal(i);

	for (let j = 1; j < i; j++) {
		let numB = getPentagonal(j),
			sum = numA + numB,
			diff = Math.abs(numA - numB);

		if (isPentagonal(sum) && isPentagonal(diff)) {
			result = diff;
			break;
		}
	}

	if (result) break;
}

console.log(result);
