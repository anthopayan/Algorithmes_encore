const fs = require('fs');
var text = fs.readFileSync("./list2.txt", 'utf-8');
var Array = text.split(' ').map((number) => Number.parseInt(number));
console.log(Array);
// à voir si on peurt enlever le .length même réponse que l'exo 4
const exercice6 = (list) => {
    var count = 0;
    var validate = 0;
    let len = list.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (list[i] <= list[j]) {
                validate = 1;
                break
            }  
        }
        if (validate == 0){
            count++; 
        } 
        validate = 0;
    }
return count;
} 

console.log(exercice6(Array));