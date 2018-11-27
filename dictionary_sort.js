// const readline = require('readline');
// // your code here to initialize the program and take user input
//
// module.exports = Dictionary
function directorySort(arr){
  for(var i = arr.length - 1; i >= 0; i--){
    for(var j = 1; j <= i; j++){
      if(arr[j-1] > arr[j]){
        var tempSwap = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = tempSwap;
      }
    }
  }
  return arr;
}
var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
console.log(directorySort(arrOfWord));
var arrOfWord = ['anggi', 'angga', 'ani', 'adi'];
console.log(directorySort(arrOfWord));
