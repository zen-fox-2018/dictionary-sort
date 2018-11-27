const readline = require('readline');
// your code here to initialize the program and take user input

function Dictionary(input) {
  for (let i = 0; i < input.length; i++) {
    let temp ;
    for (let j = i+1; j < input.length; j++) {
      if (input[j] < input[i]) {
        temp = input[i]
        input[i] = input[j]
        input[j] = temp
      }
    }
  }
  return input
}
var arr1 = ['makan' , 'duduk' , 'tidur' , 'terbang'];
var arr2 = ['anggi' , 'angga' , 'ani' , 'adi'];
console.log(Dictionary(arr1))
console.log(Dictionary(arr2))

module.exports = Dictionary
