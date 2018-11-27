const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(array) {
    for (var i = 1; i <array.length; i++){
        for (var j = 0; j < array.length; j++){
            if(array[j]>array[j+1]){
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}

console.log(dictionarySort(['makan','duduk','tidur','terbang'])) // duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi','angga','ani','adi'])) // angga,anggi,adi,ani

// module.exports = Dictionary
