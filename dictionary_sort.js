// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('input name: <name_1 name_2 name_n> ', (answer) => {
//   console.log(`name sorted: ${sorting(answer.split(' '))}`);
//   rl.close();
// });

function sorting(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (let j = i-1; j >= 0; j--) {
          if (arr[j] > temp) {
            arr[j+1] = arr[j]
            arr[j] = temp
          } else {
            break;
          }
        }
    }
    return arr.join(',')
}
console.log(sorting(['makan', 'duduk', 'tidur', 'terbang']));
console.log(sorting(['anggi', 'angga', 'ani', 'adi']));

// module.exports = Dictionary
