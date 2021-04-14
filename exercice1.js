const fs = require('fs');
var text = fs.readFileSync("./list1.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));
console.log(Array);

const exercice1 = (k, list) => {
    let len = list.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((list[i] + list[j]) == k) {
                return true;
            }
        }
    }
return false;
} 
console.log(exercice1(24, Array));
console.log(exercice1(52, Array));