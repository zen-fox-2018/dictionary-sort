// const readline = require('readline');
// // your code here to initialize the program and take user input

// module.exports = Dictionary


var arrOfWord = ['makan','duduk','tidur','terbang']
var arrOfWord2 = ['anggi', 'angga', 'ani', 'adi']
function DictionarySort (word){
    var checksort = false
    while(!checksort){
        checksort=true
        for(var i=0; i < word.length; i++){
            if(word[i-1]>word[i]){
                checksort=false
                var temp=word[i-1]
                word[i-1]=word[i]
                word[i]=temp
            }
        }
    }
    return word
}
console.log(DictionarySort(arrOfWord))
console.log(DictionarySort(arrOfWord2))