const readline = require('readline');
// your code here to initialize the program and take user input

function dictionarySort(arr){
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-i; j++) {
      if (arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(dictionarySort(['makan','duduk','tidur','terbang']));
console.log(dictionarySort(['anggi','angga','ani','adi']));
console.log(dictionarySort(['creed','foo fighters','zeppelin','ayam','kudanil']));
// module.exports = Dictionary;
