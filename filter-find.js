const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
// filter  er kaj
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);
const smallNumber = numbers.filter(number => number < 10)
// console.log(smallNumber)

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
// const expensive = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'black');

// console.log(blacks);
const whiteItems = products.find(product => product.color == 'white');
console.log(whiteItems)
