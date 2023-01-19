// Triangular, pentagonal, and hexagonal - Problem 045
// https://projecteuler.net/problem=45

/*
Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:

Triangle	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
Pentagonal	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
Hexagonal	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
It can be verified that T285 = P165 = H143 = 40755.

Find the next triangle number that is also pentagonal and hexagonal.
*/

export function getTriangular(index: number): number {
	return (index * (index + 1)) / 2;
}
export function isPentagonal(n: number): boolean {
	return Number.isInteger((Math.sqrt(24 * n + 1) + 1) / 6);
}
export function isHexagonal(n: number): boolean {
	return Number.isInteger((Math.sqrt(8 * n + 1) + 1) / 4);
}

function solve(start: number): number {
	for (let i = start; true; i++) {
		let n: number = getTriangular(i);

		if (isHexagonal(n) && isPentagonal(n)) {
			return n;
		}
	}
}

console.log(solve(286));
