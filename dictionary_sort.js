
const words = [`taqi`, `patria`, `atras`, `januar`, `wika`]

function dictionarySort(word) {
    let counter = 0
    while (counter < word.length-1) {
        for (let i = 0; i < word.length; i++) {
            if (word[i+1] < word[i]) {
                let temp = word[i]
                word[i] = word[i + 1]
                word[i+1] = temp
            }
        }
        counter++
    }
    return word
}

console.log(dictionarySort(words));



