const readline = require('readline');

function Dictionary(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        let indexmin = i
        let temp;
        for (let j = i+1 ; j < arr.length; j++) {
            if (arr[indexmin] > arr[j]) {
                indexmin = j
            }
        }
        if (i !== indexmin) {
            temp = arr[i]
            arr[i] = arr[indexmin]
            arr[indexmin] = temp
        }
    }
    return arr.join(",")
}
var arrOfWord = ["makan","duduk","tidur","terbang"]
var arrOfWord2 = ["anggi","angga","aa","ani","adi","anggo"]

console.log(Dictionary(arrOfWord))
console.log(Dictionary(arrOfWord2))
// your code here to initialize the program and take user input

module.exports = Dictionary
