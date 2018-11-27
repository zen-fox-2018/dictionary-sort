const readline = require('readline');
// your code here to initialize the program and take user input
function dictSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        debugger;
        var tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }        
    }
  }
  return arr.join(',')
}

console.log(dictSort(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictSort(['anggi', 'angga', 'ani', 'adi']));


module.exports = Dictionary
