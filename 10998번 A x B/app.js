const fs = require('fs');
const input = fs.readFileSync('D:/Programing/Node.js/input.txt').toString().split(' ').map((val)=>+val);
const [a, b] = input;
console.log(a*b);
