const numbers = [4, 6, 8, 10];
const output2 = [];
// const doubleOld(number){
//     return number * 2;
// }
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);
// 1. loop
// 2. element diye function ke call korchi
// 3. result ekta array er modde push korchi
const output = numbers.map(number => number * 2)
// console.log(output)
const square = numbers.map(x => x * x);
console.log(square);