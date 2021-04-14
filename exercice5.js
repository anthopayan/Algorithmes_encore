const fs = require('fs');
var text = fs.readFileSync("./list1.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));
console.log(Array);