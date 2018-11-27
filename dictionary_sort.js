// const readline = require('readline');
// your code here to initialize the program and take user input
function dictionarySort(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] > input[j + 1]) {
                let tmp = input[j]
                input[j] = input[j + 1]
                input[j + 1] = tmp
            }
        }
    }
    return input
}
console.log(dictionarySort(['makan', 'duduk', 'tidur', 'terbang']));
console.log(dictionarySort(['anggi', 'angga', 'ani', 'adi']));

// module.exports = Dictionary

