// const readline = require('readline');
// // your code here to initialize the program and take user input
//
// module.exports = Dictionary

function dictionary(arr){
  // bubble sort
  // let cek = true
  // while (cek){
  //   cek = false
  //   for (let i = 0 ; i <arr.length - 1 ; i++){
  //     if (arr[i] > arr[i+1]){
  //       let tmp = arr[i]
  //       arr[i] = arr[i+1]
  //       arr[i+1] = tmp
  //       cek = true
  //     }
  //   }
  // }
  // return arr

  // selection sort
  for (let i = 0 ; i < arr.length - 1 ; i++){
    let min = i
    for (let j = i + 1 ; j < arr.length ; j++){
      if (arr[j] < arr[min]){
        min = j
      }
    }
    //swap here
    let tmp = arr[i]
    arr[i] = arr[min]
    arr[min] = tmp
  }
  return arr
}

console.log(dictionary(['makan', 'duduk', 'tidur', 'terbang']))
console.log(dictionary(['anggi' , 'angga', 'ani' , 'adi']))
