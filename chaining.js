// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(x, b);
// destructuring - array
const [p, q] = [45, 37];
// console.log(p, q);

const [best, faltu] = ['unda', 'dim'];
// console.log(best, faltu);
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 }
// console.log(sky, money)
console.log('myObject.p:', myObject?.p?.q)