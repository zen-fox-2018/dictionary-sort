// const readline = require('readline');

function dictionarySort(input) {

    for(let i = 1; i < input.length; i++) {
        let temp = input[i]
        for(let j = i-1; j >= 0 ;j--) {
          if(input[j] > temp) {
            input[j+1] = input[j]
            input[j] = temp
          } 
        }
    }
    return input.join(",")
}
const dictionary1 = ["makan", "duduk", "tidur", "terbang"];
const dictionary2 = ["anggi", "angga", "ani", "adi"];

console.log(dictionarySort(dictionary1));
console.log(dictionarySort(dictionary2));

// module.exports = Dictionary
