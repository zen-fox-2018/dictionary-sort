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


// const readline = require('readline');
// // your code here to initialize the program and take user input

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
  
//   console.log(DictionarySort(answer.split(' ')))
//   rl.close();
// });

// function DictionarySort (word){
//     var checksort = false
//     while(!checksort){
//         checksort=true
//         for(var i=0; i < word.length; i++){
//             if(word[i-1]>word[i]){
//                 checksort=false
//                 var temp=word[i-1]
//                 word[i-1]=word[i]
//                 word[i]=temp
//             }
//         }
//     }
//     return word
// }
