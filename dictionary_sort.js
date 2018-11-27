// const readline = require('readline');

function dictionary(str){
    var unsorted = true
    while(unsorted){
        var unsorted =  false
        for(var i = 0; i < str.length; i ++ ){
            if(str[i] > str[i+1]){
                var tampung = str[i]
                str[i] = str[i+1]
                str[i+1] = tampung
                var unsorted = true
            }
        }
    }
    return str
}

console.log(dictionary(['makan','duduk','berdiri','bercerita','angga','anggi']))


//  module.exports = Dictionary
