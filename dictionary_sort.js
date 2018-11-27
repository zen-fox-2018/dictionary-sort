const readline = require('readline');
// your code here to initialize the program and take user input

function DictionarySort(arr){
    
    for(var i=0; i<arr.length-1; i++){
        for(var j=0; j<arr.length-1; j++){
            if(arr[j][0]>arr[j+1][0])
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
    return arr.join(", ")
}

console.log(DictionarySort(['makan', 'duduk', 'tidur', 'terbang']))

console.log(DictionarySort(['anggi', 'angga', 'ani', 'adi']))

