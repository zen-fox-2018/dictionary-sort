// const readline = require('readline');
// // your code here to initialize the program and take user input

// module.exports = Dictionary

function dictSort(array) {
    var i = 0
    while (i <= array.length - 1) {
        if (array[i+1] != undefined) {
            if ( array[i][0] == array[i + 1][0]) {     
                var j = 1
                while (j <= array[i].length-1) {
                    if (array[i][j] > array[i + 1][j]){
                        var tmp = array[i + 1]
                        array[i + 1] = array[i]
                        array[i] = tmp
                    }
                    j++
                }
            } else if (array[i][0] >= array[i + 1][0]) {
                var temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
            }
        }
        i++
    }
    return array.join(', ')
}

var arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'];
console.log(dictSort(arrOfWord))
//duduk, makan, terbang, tidur

var arrOfWord = ['anggi', 'angga', 'ani', 'adi'];
console.log(dictSort(arrOfWord))
// angga, anggi, adi, ani