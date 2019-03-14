let x,y,z
let timeInMs = Date.now();

x=10;
y='10';
z=30;

console.log(`x is ${typeof x}`);

var newX = x++;

console.log(`newX is ${x}`);

console.log(`newX is ${x == y}`);

console.log(`timeInMs is ${timeInMs}`);

console.log(`timeInMs is ${timeInMs * 1000 * 60 * 60 * 24 * 365}`);