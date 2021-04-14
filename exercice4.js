const fs = require('fs');
var text = fs.readFileSync("./list2.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));
console.log(Array);
console.log(Array[-1]);

const exercice4 = (list) => {
    var count = 0;
    var max = 0;
    let len = list.length;
    for (let i = len -1;  i >= 0; i--) {
        if (list[i] > max){
            max = list[i];
            count ++;
        }
    }
return count;
} 

console.log(exercice4(Array));