const readline = require('readline');
function dictionarySort(input) {
  let array = input
  let temp = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j >=0; j--) {
      if (array[j] < array[j-1]) {
        temp = array[j-1]
        array[j-1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

console.log(dictionarySort(['makan','duduk','tidur','terbang'])); //duduk,makan,terbang,tidur
console.log(dictionarySort(['anggi','angga','ani','adi'])); //adi,angga,anggi,ani


// module.exports = Dictionary
