// Problem 022
// https://projecteuler.net/problem=22
// Using names.txt begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
// What is the total of all the name scores in the file?
import { getNames, scoreList } from "./fns.js";
const names = getNames("names");
const namesSum = scoreList(names);
console.log(namesSum);
