const readline = require('readline');

function Dictionary(input) {
  var result = '';

  for (var i = 0; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      var temp = input[i];
      input[i] = input[i + 1];
      input[i + 1] = temp;
      i = -1;
    }
  }
  
  for (var j = 0; j < input.length; j++) {
    if (input[j] === input[input.length-1]) {
      result += input[j];
    } else {
      result += input[j] + ',';
    }
  }
  return result;
}

console.log(Dictionary(['makan', 'duduk', 'tidur', 'terbang']));  //duduk,makan,terbang,tidur
console.log(Dictionary(['anggi', 'angga', 'ani', 'adi'])); //angga,anggi,adi,ani

module.exports = Dictionary
