// const readline = require('readline');
// your code here to initialize the program and take user input

// module.exports = Dictionary

function dictionarySort(arr){
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            // console.log('ini j ke ' + j + ' dengan nilai :' + arr[j]);
            if (arr[j+1] < arr[j]) {
                var temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                // console.log(arr);
            }

        }

    }
    
    return arr
  }

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
console.log(dictionarySort(arrOfWord));
var arrOfWord = ['anggi', 'angga', 'adi', 'ani'];
console.log(dictionarySort(arrOfWord));

