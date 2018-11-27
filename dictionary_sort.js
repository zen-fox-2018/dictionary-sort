const readline = require('readline');
// your code here to initialize the program and take user input
function Dictionary(input) {
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length; j++) {
            let temp = ''
            if(input[j] > input[j+1]) {
                temp = input[j]
                input[j] = input[j+1]
                input[j+1] = temp
            }
        }
    }
    return input.join(', ')
}

console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang'])) //duduk,makan,terbang,tidur
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi'])) //angga,anggi,adi,ani

module.exports = Dictionary
