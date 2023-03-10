// Square digit chains - Problem 92
// https://projecteuler.net/problem=92

/*
A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

For example,

44 → 32 → 13 → 10 → 1 → 1
85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

How many starting numbers below ten million will arrive at 89?
*/

function sumSquareDigits(n: number): number {
	let sum: number = [...String(n)].reduce(
		(acc, cur) => acc + Number(cur) ** 2,
		0
	);
	return sum;
}
const validNumbers: Set<number> = new Set();

for (let i = 1; i < 10_000_000; i++) {
	let n: number = sumSquareDigits(i);

	while (true) {
		if (n === 1) break;
		if (n === 89 || validNumbers.has(n)) {
			validNumbers.add(i);
			break;
		}

		n = sumSquareDigits(n);
	}
}

console.log(validNumbers.size);
