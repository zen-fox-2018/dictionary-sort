const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('silahkan input kata ', (answer) => {
  // TODO: Log the answer in a database
  console.log(dictionary(answer.split(' ')))
  

  rl.close();
});

function dictionary(arr){
    var n = arr.length
    while(n!==0){
        nBaru = 0
        for(i=1; i<arr.length; i++){
            if(arr[i] < arr[i-1]){
                var temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                nBaru = i
            }
        }
        n = nBaru
    }

    var temp = ''
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++){
            temp+=arr[i][j]
        }
        if(i !== arr.length-1){
            temp+= ','
        }
    }
    return temp
}

// module.exports = Dictionary
