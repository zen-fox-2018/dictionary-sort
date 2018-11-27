//WITH READLINE
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('Masukkan kalimat yang akan di sort... \n', (answer) => {
//   console.log(directorySort(answer.split(' ')));
//   rl.close();
// });

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
var arrOfWord = ['anggi', 'angga', 'adi', 'ani'];
console.log(directorySort(arrOfWord));
